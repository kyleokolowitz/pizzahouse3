<template>
<div>
   <Navbar />
   <center>

      <h1>Order Review</h1>
      <br>

      <div class="main-box">
         <div class="orderSummary">
            <h3> Order Summary</h3>
            <hr>

            <div v-for="item in items" :key="item.itemID">
               <div class="order-item">
                  <p class="leftAlign">{{item.quantity}} x {{pizzas[item.pizzaType].name}} - {{sizes[item.size].size}}</p>
                  <p class="rightAlign">${{sizes[item.size].price * item.quantity}}</p>
                  <br>
               </div>
            </div>
            <br>
            <hr>

            <div class="summaryRow">
               <p class="leftAlign">Subtotal: </p>
               <p class="rightAlign"> ${{subtotal.toFixed(2)}}</p>
            </div>
            <div v-if="delivery" class="summaryRow">
               <p class="leftAlign">Delivery: </p>
               <p class="rightAlign"> $10.00</p>
            </div>
            <div class="summaryRow">
               <p class="leftAlign">Tax: </p>
               <p class="rightAlign"> ${{tax.toFixed(2)}}</p>
            </div>
            <hr>
            <strong>
               <p class="leftAlign">Total: </p>
               <p class="rightAlign"> ${{total.toFixed(2)}}</p>
            </strong>
            <br>

         </div>

         <div class="orderSummary">
            <div v-if="delivery">
               <h3>Delivery Address</h3>
               <div class="delivery-box">
                  <label>Name: </label>{{name}}
                  <br>
                  <label for="address">Address: </label>{{address}}
                  <br>
                  <label for="city">City: </label>{{city}}
                  <br>
                  <label for="state">State: </label>{{state}}
                  <br>
                  <label for="zip">Zip: </label>{{zip}}
                  <br>
               </div>
               <hr>
            </div>

            <div>
               <h3>Payment</h3>
               <hr v-if="!delivery">
               <div class="delivery-box">
                  <label v-if="!delivery">Name: </label><span v-if="!delivery">{{name}}</span>
                  <br v-if="!delivery">
                  <label>Card: </label>{{card}}
                  <br>
                  <label>CVV: </label>***
                  <br>
                  <label>Exp. Date: </label>{{expDate}}
                  <br>
               </div>
            </div>

         </div>
      </div>
      <br>

      <router-link to="/payment">
         <button class="back-button button">Back</button>
      </router-link>
      <button class="order-button button" @click="placeOrder">Place Order</button>
      <br><br>
   </center>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import axios from "axios"
export default {
   name: 'Review',
   components: {
      Navbar
   },
   data() {
      return {
         selectedSize: 2,
         items: [],
         delivery: null,
         name: null,
         address: null,
         city: null,
         state: null,
         zip: null,
         card: null,
         cvv: null,
         expDate: null
      }
   },
   async created() {
      if (!this.$cookies.isKey("orderID")) {
         this.$router.push('/order');
      }
      try {
         // get order
         let response = await axios.get('/api/orders/' + this.$cookies.get("orderID"));
         this.delivery = response.data[0].delivery;
         this.name = response.data[0].name;
         this.address = response.data[0].address;
         this.city = response.data[0].city;
         this.state = response.data[0].state;
         this.zip = response.data[0].zip;
         this.card = response.data[0].card;
         this.cvv = response.data[0].cvv;
         this.expDate = response.data[0].expDate;

         // get order items
         let response2 = await axios.get('/api/items/' + this.$cookies.get("orderID"));
         this.items = response2.data;
      } catch (error) {
         console.log(error);
         this.items = [];
      }
   },
   computed: {
      pizzas() {
         return this.$root.$data.pizzas;
      },
      sizes() {
         return this.$root.$data.sizes;
      },
      subtotal() {
         let subtotal = 0;
         for (let i = 0; i < this.items.length; i++) {
            subtotal += this.sizes[this.items[i].size].price * this.items[i].quantity;
         }
         return subtotal;
      },
      tax() {
         let sub = this.subtotal;
         if (this.delivery) {
            sub += 10;
         }
         return sub * 0.07;
      },
      total() {
         var sub = this.subtotal + this.tax;
         if (this.delivery) {
            sub += 10;
         }
         return sub;
      }
   },
   methods: {
      placeOrder() {
         this.$cookies.remove("orderID");
         // Redirect to thank you page
         this.$router.push('/thankyou');
      }

   }
}
</script>

<style scoped>
.main-box {
   display: flex;
   justify-content: center;
   flex-direction: row;
}

/* Mobile Styles */
@media only screen and (max-width: 700px) {
   .main-box {
      flex-direction: column;
      align-items: center;
   }
}

.orderSummary {
   display: flex;
   flex-direction: column;
   box-shadow: 0 0 5px 1px grey;
   width: 420px;
   padding: 20px;
   display: inline-block;
   margin: 20px;
}

/* Mobile Styles */
@media only screen and (max-width: 500px) {
   .orderSummary {
      width: 95%;
   }
}

.summaryRow {
   display: inline-block;
   width: 100%;
   height: 25px;
}

.delivery-box {
   text-align: left;
   margin-left: 20px;
}

.leftAlign {
   float: left;
   text-align: left;
}

.rightAlign {
   float: right;
}

label {
   margin-right: 15px;
}

.back-button {
   background-color: var(--light-rust);
   border-radius: 15px;
   width: 150px;
   height: 40px;
   box-shadow: 1px 1px 3px grey;
   margin-right: 20px;
}
</style>
