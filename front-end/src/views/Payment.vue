<template>
<div>
   <Navbar />
   <center>
      <form action="/review">
         <div class="main-box">
            <div v-if="delivery">
               <h2>Delivery Address</h2>
               <div class="box">
                  <label for="name">Name: </label>
                  <input v-model="name" type="text" @change="updateInfo" required>
                  <br>
                  <label for="address">Address: </label>
                  <input v-model="address" type="text" @change="updateInfo" required>
                  <br>
                  <label for="city">City: </label>
                  <input v-model="city" type="text" @change="updateInfo" required>
                  <br>
                  <label for="state">State: </label>
                  <input v-model="state" type="text" @change="updateInfo" required>
                  <br>
                  <label for="zip">Zip: </label>
                  <input v-model="zip" type="text" @change="updateInfo" required>
                  <br>
               </div>
            </div>

            <h2>Payment</h2>
            <div class="box">
               <label v-if="!delivery" for="name">Name: </label>
               <input v-if="!delivery" v-model="name" type="text" @change="updateInfo" required>
               <br v-if="!delivery">
               <label for="card">Card #: </label>
               <input v-model="card" type="text" placeholder="**** **** **** ****" @change="updateInfo" required>
               <br>
               <label for="cvv">CVV: </label>
               <input v-model="cvv" type="text" placeholder="***" @change="updateInfo" required>
               <br>
               <label for="exp">Exp. Date: </label>
               <input v-model="expDate" type="string" placeholder="mm/yy" @change="updateInfo" required>
            </div>
         </div>

         <br><br>
         <router-link to="/order">
            <button class="back-button button">Back</button>
         </router-link>
         <button class="order-button button">Continue</button>

      </form>
      <br><br>

   </center>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import axios from "axios"
export default {
   name: 'Payment',
   components: {
      Navbar
   },
   data() {
      return {
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
   },
   computed: {
      pizzas() {
         return this.$root.$data.pizzas;
      },
      sizes() {
         return this.$root.$data.sizes;
      }
   },
   methods: {
      async updateInfo() {
         try {
            await axios.put("/api/orders/payment/" + this.$cookies.get("orderID"), {
               name: this.name,
               address: this.address,
               city: this.city,
               state: this.state,
               zip: this.zip,
               card: this.card,
               cvv: this.cvv,
               expDate: this.expDate,
            });
         } catch (error) {
            console.log(error);
         }
      },
      con() {
         alert('clicked');
         this.$router.push('/review');
      }
   }
}
</script>

<style scoped>
.box {
   width: 360px;
}

.main-box {
   display: inline-block;
   box-shadow: 0 0 5px 1px grey;
   background-color: white;
   padding: 10px;
   width: 500px;
}

label {
   display: inline-block;
   float: left;
   clear: left;
   width: 110px;
   text-align: right;
   margin-right: 10px;
}

input {
   font-family: sans, "Times New Romans";
   display: inline-block;
   float: left;
}

/* Mobile Styles */
@media only screen and (max-width: 600px) {
   .main-box {
      width: 90%;
   }

   label {
      width: 70px;
   }
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
