<template>
<div>
   <Navbar />
   <center>

      <h1>Making The Perfect Pizza</h1>

      <br>
      <h3>Hand Picked Ingredients</h3>
      <img class="learning-img" src="images/learn/tomatos.jpg" />

      <br><br><br>
      <h3>Made Fresh To Order</h3>
      <img class="learning-img" src="images/learn/dough.jpg" />

      <br><br><br>
      <h3>Hand Tossed</h3>
      <img class="learning-img" src="images/learn/toss.jpg" />

      <br><br><br>
      <h3>Each Carefully Crafted</h3>
      <img class="learning-img" src="images/learn/sauce.jpg" />

      <br><br><br>
      <h3>Customized To Each Order</h3>
      <img class="learning-img" src="images/learn/crafting.jpg" />

      <br><br><br>
      <h3>Brick Oven Cooked</h3>
      <img class="learning-img" src="images/learn/cooking.jpg" />

      <br><br><br>
      <h3>Enjoyed By All</h3>
      <img class="learning-img" src="images/learn/slices.jpg" />
      <br>

   </center>
</div>
</template>

<script scoped>
import Navbar from "../components/Navbar.vue"
export default {
   components: {
      Navbar
   }
}
</script>

<style>
/* Learn */
.learning-img {
   width: 100%;
}
</style>
