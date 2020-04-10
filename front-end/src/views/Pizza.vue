<template>
<div>
   <Navbar />
   <center>
      <h1 id="title">{{pizzas[id].name}}</h1>
   </center>

   <router-link to="/menu">
      <button class="back-button button">Back</button>
   </router-link>

   <section class="about-box">
      <div class="box">
         <img id="product-pic" :src="'/images/pizzas/' + pizzas[id].img" />
      </div>

      <div></div>

      <div class="box word-box">
         <br>
         <h3>${{sizes[selectedSize].price}}</h3>
         <br>
         <p>{{pizzas[id].description}}</p>
         <br>

         Size:
         <select v-model="selectedSize">
            <option v-for="size in sizes" :key="size.id" v-bind:value="size.id">
               {{ size.size }}
            </option>
         </select>
         <br><br><br>

         <center>
            <button class="order-button button" @click="addToOrder">Add to Order</button>
         </center>
      </div>
   </section>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import {
   v4 as uuid
} from 'uuid';
export default {
   name: 'Pizza',
   components: {
      Navbar
   },
   data() {
      return {
         id: this.$route.params.id,
         selectedSize: 2,
         addItem: null,
      }
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
      async addToOrder() {
         if (!this.$cookies.isKey("orderID")) {
            this.$cookies.set("orderID", uuid());
         }
         try {
            let r1 = await axios.post('/api/items', {
               itemID: uuid(),
               orderID: this.$cookies.get("orderID"),
               pizzaType: this.id,
               description: this.pizzas[this.id].description,
               size: this.selectedSize,
               quantity: 1
            });
            this.addItem = r1.data;
            this.$router.push('/order');
         } catch (error) {
            console.log(error);
         }
      },
   }
}
</script>

<style>
#product-pic {
   width: 100%;
   margin-top: 10%;
   display: inline-block;
   box-shadow: 2px 2px 3px grey;
}

.order-button {
   background-color: #70DA65;
   border-radius: 15px;
   width: 150px;
   height: 40px;
   box-shadow: 1px 1px 3px grey;
}

.back-button {
   background-color: var(--light-rust);
   width: 100px;
   height: 30px;
   color: black;
   margin-left: 20px;
   border-radius: 10px;
   padding: 5px;
   text-decoration: none;
   text-align: center;
   color: black;
}

.button:hover {
   opacity: 0.8;
}
</style>
