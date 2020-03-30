<template>
<div>
   <Navbar />
   <center>
      <h1>Specialty Pizzas</h1>
   </center>

   <div class="masonry">
      <router-link to="/build">
         <div class="item">
            <img class="portfolio-img" src="images/pizzas/build.jpg" />
            <h4 class="pizza-name">Build Your Own</h4>
         </div>
      </router-link>

      <div class="pizza" v-for="pizza in pizzas" :key="pizza.id">
         <router-link :to="'/pizza/' + pizza.id">
            <div class="item">
               <img class="portfolio-img" :src="'images/pizzas/' + pizza.img">
               <h4 class="pizza-name">{{pizza.name}}</h4>
            </div>
         </router-link>
      </div>
   </div>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
   name: 'Menu',
   components: {
      Navbar
   },
   computed: {
      pizzas() {
         return this.$root.$data.pizzas;
      }
   },
}
</script>

<style>
.pizza-name {
   text-align: center;
   margin-top: 15px;
   color: black;
}

.masonry {
   column-gap: 2em;
   margin: 2em 5em;
}

/* Mobile Styles */
@media only screen and (max-width: 500px) {
   .masonry {
      column-count: 1;
      margin: 1em;
   }
}

/* Tablet Styles */
@media only screen and (min-width: 501px) and (max-width: 960px) {
   .masonry {
      column-count: 2;
      margin: 2em;
   }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
   .masonry {
      column-count: 3;
   }
}

.item {
   /* Masonry bricks or child elements */
   background-color: #eee;
   display: inline-block;
   margin: 15px 0 1em;
   width: 100%;
   box-shadow: 0 0 5px 1px grey;
}

.item:hover {
   opacity: 0.7;
   box-shadow: 0 0 5px 1px var(--rust);
}

.portfolio-img {
   width: 100%;

}
</style>
