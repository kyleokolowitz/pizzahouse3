<template>
<div>
   <Navbar />
   <center>
      <h1>About</h1>
   </center>

   <section class="about-box">
      <div class="box">
         <img id="profile-pic" src="images/tomato.png" />
      </div>

      <div></div>

      <div class="box word-box">
         <h3>Background</h3>
         <p>
            The Pizza House has been around for over 100 years.
            It was first founded by Mike who made the first pizza.
            For the past 100 years, and the foreseeable future,
            it has been the most popular places to get pizza in all of Provo.
         </p>
         <br>
         <h3>Location</h3>
         <p>
            123 Pizza Plaza<br>
            Provo, UT 84604
         </p>
         <br>
         <h3>Contact</h3>
         <p>
            <strong>Phone:</strong> (801) 123-9806<br>
            <strong>E-mail:</strong> pizza.house@gmail.com<br>
            <strong>Facebook:</strong> Pizza House<br>
         </p>
      </div>
   </section>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
   components: {
      Navbar
   }
}
</script>

<style scoped>
/* About */
#profile-pic {
   width: 80%;
   margin: 10%;
   display: inline-block;
}

.about-box {
   font-family: monaco;
}

.box {
   display: inline-block;
   margin: 0 0 3em;
   width: 100%;
}

.word-box {
   padding: 20px;
}

/* Mobile Styles */
@media only screen and (max-width: 600px) {
   .about-box {
      column-count: 1;
      margin: 0px 25px;
   }
}

/* Tablet Styles */
@media only screen and (min-width: 601px) and (max-width: 960px) {
   .about-box {
      column-count: 2;
      column-gap: 2em;
      margin: 0px 5%;
   }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
   .about-box {
      column-count: 2;
      column-gap: 3em;
      margin: 0px 15%;
   }
}
</style>
