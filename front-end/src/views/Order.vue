<template>
<div>
   <Navbar v-if="renderComponent" />
   <center>

      <h1>Your Order</h1>
      <br>

      <div v-if="items.length == 0">
         <br><br>
         <p>Your order is empty.</p>
      </div>

      <div class="box" v-if="items.length > 0">
         <div v-for="item in items" :key="item.itemID">
            <div class="order-item">
               <img :src="'images/pizzas/' + pizzas[item.pizzaType].img">
               <div class="pizza-name-box">
                  <h5 class="pizza-name">{{pizzas[item.pizzaType].name}}</h5>
                  <p class="description">{{item.description}}</p>
               </div>
               <div class="property">
                  <label for="size">Size: </label>
                  <select @change="edit(item)" v-model="item.size">
                     <option v-for=" size in sizes" :key="size.id" v-bind:value="size.id">
                        {{ size.size }}
                     </option>
                  </select>
               </div>
               <div class="property">
                  <label for="quantity">Quantity: </label>
                  <input v-model="item.quantity" type="number" min="1" max="20" @change="edit(item)">
               </div>
               <div class="property">
                  <label for="quantity">Cost: </label>
                  <span>${{sizes[item.size].price * item.quantity}}</span>
               </div>
               <div class="remove-button-div">
                  <i class="far fa-times-circle fa-lg" @click.prevent="remove(item)"></i>
               </div>
            </div>
         </div>

         <input class="toggle" type="checkbox" v-model="delivery" @change="updateDelivery" />
         <br><br><br>

         <div class="orderTotals">
            <label for="subtotal">Subtotal: ${{subtotal.toFixed(2)}}</label>
            <br>
            <label v-if="delivery" for="deliveryCost">Delivery: $10.00</label>
            <br v-if="delivery">
            <label for="tax">Tax: ${{tax.toFixed(2)}}</label>
            <br>
            -------------------------
            <br>
            <label for="total"><strong>Total: ${{total.toFixed(2)}}</strong></label>
            <br><br>

            <button class="order-button button" @click="updateTotals">Pay</button>
         </div>

      </div>
   </center>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import axios from "axios"
import {
   v4 as uuid
} from 'uuid';
export default {
   name: 'Order',
   components: {
      Navbar
   },
   data() {
      return {
         renderComponent: true,
         selectedSize: 2,
         items: [],
         delivery: false,
      }
   },
   async created() {
      if (!this.$cookies.isKey("orderID")) {
         this.$cookies.set("orderID", uuid());
      }
      try {
         // get order
         let response = await axios.get('/api/orders/' + this.$cookies.get("orderID"));
         if (response.data.length == 0) {
            await axios.post('/api/orders', {
               orderID: this.$cookies.get("orderID"),
               delivery: false
            });
         } else {
            this.delivery = response.data[0].delivery;
         }

         // get order items
         let response2 = await axios.get('/api/items/' + this.$cookies.get("orderID"));
         this.items = response2.data;
      } catch (error) {
         //console.log(error);
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
      async edit(item) {
         try {
            await axios.put("/api/items/" + item.itemID, {
               size: item.size,
               quantity: item.quantity
            });
            let response = await axios.get('/api/items/' + this.$cookies.get("orderID"));
            this.items = response.data;
         } catch (error) {
            //console.log(error);
         }
      },
      async remove(item) {
         try {
            await axios.delete('/api/items/' + item.itemID);
            let response = await axios.get('/api/items/' + this.$cookies.get("orderID"));
            this.items = response.data;
            this.reloadNavbar();
         } catch (error) {
            //console.log(error);
         }
      },
      async updateDelivery() {
         try {
            await axios.put("/api/orders/delivery/" + this.$cookies.get("orderID"), {
               delivery: this.delivery,
            });
         } catch (error) {
            //console.log(error);
         }
      },
      async updateTotals() {
         try {
            await axios.put("/api/orders/totals/" + this.$cookies.get("orderID"), {
               subtotal: this.subtotal.toFixed(2),
               tax: this.tax.toFixed(2),
               total: this.total.toFixed(2)
            });
            this.$router.push('/payment');
         } catch (error) {
            //console.log(error);
         }
      },
      reloadNavbar() {
         this.renderComponent = false;
         this.$nextTick(() => {
            this.renderComponent = true;
         });
      },

   }
}
</script>

<style scoped>
.box {
   width: 80%;
}

.order-item {
   display: flex;
   flex-direction: row;
   box-shadow: 0 0 5px 1px grey;
   width: 100%;
   margin-bottom: 20px;
}

/* Mobile Styles */
@media only screen and (max-width: 700px) {
   .order-item {
      flex-direction: column;
   }

   .content {
      width: 95%;
   }
}

.order-item img {
   height: 100px;
   margin: 5px;
}

.pizza-name-box {
   display: inline-block;
   text-align: left;
   margin: 5px;
}

.pizza-name {
   margin: 5px;
   text-align: left;
}

.description {
   display: inline-block;
}

.property {
   margin: 5px;
}

.remove-button-div {
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 5px;
}

.fa-times-circle:hover {
   color: red;
}

/* Delivery Switch */
.toggle {
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   width: 100px;
   height: 32px;
   display: inline-block;
   position: relative;
   border-radius: 50px;
   overflow: hidden;
   outline: none;
   border: none;
   cursor: pointer;
   background-color: #707070;
   transition: background-color ease 0.3s;
   float: right;
}

.toggle:before {
   content: "Delivery Pickup";
   display: block;
   position: absolute;
   z-index: 2;
   width: 28px;
   height: 28px;
   background: #fff;
   left: 2px;
   top: 2px;
   border-radius: 50%;
   font: 10px/28px Helvetica;
   text-transform: uppercase;
   font-weight: bold;
   text-indent: -58px;
   word-spacing: 47px;
   color: #fff;
   text-shadow: -1px -1px rgba(0, 0, 0, 0.15);
   white-space: nowrap;
   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
   transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
}

.toggle:checked {
   background-color: var(--light-rust);
}

.toggle:checked:before {
   left: 70px;
}


/* Totals Box */
.orderTotals {
   float: right;
   text-align: right;
}
</style>
