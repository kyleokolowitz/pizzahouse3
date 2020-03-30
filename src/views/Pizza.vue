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
         <h3>${{sizes[selected].price}}</h3>
         <br>
         <p>{{pizzas[id].description}}</p>
         <br>

         Size:
         <select v-model="selected">
            <option v-for="size in sizes" :key="size.id" v-bind:value="size.id">
               {{ size.size }}
            </option>
         </select>
         <br><br><br>

         <center>
            <button class=" order-button button">Add to Order</button>
         </center>
      </div>
   </section>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
   name: 'Pizza',
   components: {
      Navbar
   },
   data() {
      return {
         id: this.$route.params.id,
         selected: 2,
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
   background-color: green;
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
