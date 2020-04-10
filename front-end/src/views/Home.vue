<template>
<div class="home">
   <Navbar />
   <img id="home-bg-desktop" class="home-bg" src="images/pizza-desktop.jpg" />
   <img id="home-bg-tablet" class="home-bg" src="images/pizza-tablet.jpg" />
   <img id="home-bg-mobile" class="home-bg" src="images/pizza-mobile.jpg" />
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
   name: 'Home',
   components: {
      Navbar
   }
}
</script>

<style scoped>
.home-bg {
   width: 100%;
   z-index: -1;
   display: block;
   margin-top: -130px;
}

/* Mobile Styles */
@media only screen and (max-width: 500px) {
   #home-bg-desktop {
      display: none;
   }

   #home-bg-tablet {
      display: none;
   }
}

/* Tablet Styles */
@media only screen and (min-width: 501px) and (max-width: 960px) {
   #home-bg-desktop {
      display: none;
   }

   #home-bg-mobile {
      display: none;
   }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
   #home-bg-mobile {
      display: none;
   }

   #home-bg-tablet {
      display: none;
   }
}
</style>
