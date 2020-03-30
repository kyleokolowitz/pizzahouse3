<template>
<div>
   <Navbar />
   <center>
      <h1 id="title">Build Your Own</h1>
   </center>

   <router-link to="/menu">
      <button class="back-button button">Back</button>
   </router-link>

   <section class="about-box">
      <div id="pizza-builder" class="box">
         <img class="layer" src="images/build/pizza.png" />
         <img class="layer" src="images/build/cheese.png" v-if="cheeseChecked" />
         <img class="layer" src="images/build/pepperoni.png" v-if="pepperoniChecked" />
         <img class="layer" src="images/build/sausage.png" v-if="sausageChecked" />
         <img class="layer" src="images/build/mushroom.png" v-if="mushroomChecked" />
         <img class="layer" src="images/build/jalapeno.png" v-if="jalapenoChecked" />
         <img class="layer" src="images/build/olive.png" v-if="oliveChecked" />
         <img class="layer" src="images/build/onion.png" v-if="onionChecked" />
         <img class="layer" src="images/build/pineapple.png" v-if="pineappleChecked" />
         <img class="layer" src="images/build/ham.png" v-if="hamChecked" />
         <img class="layer" src="images/build/spinach.png" v-if="spinachChecked" />
      </div>

      <div></div>

      <div class="box create-box">
         <br>
         <h3>${{sizes[selected].price}}</h3>
         <br>
         Size:
         <select v-model="selected">
            <option v-for="size in sizes" :key="size.id" v-bind:value="size.id">
               {{ size.size }}
            </option>
         </select>

         <br><br>
         <strong>Crust:</strong>
         <select name="crust">

            <option value="Thin">Thin</option>
            <option value="Regular" selected>Regular</option>
            <option value="Thick">Thick</option>
         </select>
         <br><br>
         <strong>Toppings:</strong>
         <br>
         <div class="toppings-box">
            <div>
               <input type="checkbox" name="Cheese" value="Cheese" v-model="cheeseChecked"> Extra Cheese<br>
               <input type="checkbox" name="Pepperoni" value="Pepperoni" v-model="pepperoniChecked"> Pepperoni<br>
               <input type="checkbox" name="Sausage" value="Sausage" v-model="sausageChecked"> Sausage<br>
               <input type="checkbox" name="Mushroom" value="Mushroom" v-model="mushroomChecked"> Mushroom<br>
               <input type="checkbox" name="Jalapenos" value="Jalapenos" v-model="jalapenoChecked"> Jalapenos<br>
            </div>

            <div>
               <input type="checkbox" name="Olive" value="Olive" v-model="oliveChecked"> Olive<br>
               <input type="checkbox" name="Onion" value="Onion" v-model="onionChecked"> Onion<br>
               <input type="checkbox" name="Spinach" value="Spinach" v-model="spinachChecked"> Spinach<br>
               <input type="checkbox" name="Pineapple" value="Pineapple" v-model="pineappleChecked"> Pineapple<br>
               <input type="checkbox" name="Ham" value="Ham" v-model="hamChecked"> Ham<br>
            </div>
         </div>

         <br><br>
         <center>
            <button class="order-button button">Add to Order</button>
         </center>

      </div>
   </section>

</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
   name: 'Build',
   components: {
      Navbar
   },
   data() {
      return {
         id: this.$route.params.id,
         selected: 2,
         cheeseChecked: false,
         pepperoniChecked: false,
         sausageChecked: false,
         mushroomChecked: false,
         jalapenoChecked: false,
         oliveChecked: false,
         onionChecked: false,
         spinachChecked: false,
         pineappleChecked: false,
         hamChecked: false,
      }
   },
   computed: {
      sizes() {
         return this.$root.$data.sizes;
      }
   },
}
</script>

<style scoped>
#product-pic {
   box-shadow: 0px 0px 0px grey;
}

.create-box {
   padding: 0px;
}

.toppings-box {
   column-count: 2;
   column-gap: 1em;
}

#pizza-builder {
   position: relative;
   height: 250px;
}

.layer {
   position: absolute;
   top: 0px;
   left: 0px;
   width: 100%;
   margin-top: 10%;
   display: inline-block;
}
</style>
