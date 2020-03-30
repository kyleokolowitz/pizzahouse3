<template>
<div>


   <div id="page-container">
      <div id="content-wrap">
         <router-view />

      </div>
      <footer id="footer">
         <br>
         <center>
            <p id="footer-header">Pizza House</p>
            <p class="footer-menu">
               <router-link to="/">
                  <a class="footer-link" href="">Home</a>
               </router-link>
               |
               <router-link to="/menu">
                  <a class="footer-link" href="">Menu</a>
               </router-link>
               |
               <router-link to="/learn">
                  <a class="footer-link" href="">Learn</a>
               </router-link>
               |
               <router-link to="/about">
                  <a class="footer-link" href="">About</a>
               </router-link>
            </p>
            <p id="source-code-link">Find source code <a href="https://github.com/kyleokolowitz/pizzahouse2">here.</a></p>
         </center>
      </footer>
   </div>
</div>
</template>

<script>
export default {
   name: 'App'
}
</script>

<style>
@font-face {
   font-family: 'Papyrus';
   src: url('assets/webfonts/Papyrus-Regular/Papyrus-Regular.eot?#iefix') format('embedded-opentype'), url('assets/webfonts/Papyrus-Regular/Papyrus-Regular.woff') format('woff'), url('assets/webfonts/Papyrus-Regular/Papyrus-Regular.ttf') format('truetype'), url('assets/webfonts/Papyrus-Regular/Papyrus-Regular.svg#Papyrus-Regular') format('svg');
   font-weight: normal;
   font-style: normal;
}

:root {
   --white: #fffcf9;
   /* white with orange*/
   --light-rust: #dd7804;
   --rust: #C55829;
}

/* General */
body {
   font-family: Papyrus;
   background-color: var(--white);
   position: relative;
}

#page-container {
   margin-top: 100px;
   position: relative;
   min-height: 100vh;
}

#content-wrap {
   padding-bottom: 150px;
   /* Footer height */
}

/* Mobile Styles */
@media only screen and (max-width: 500px) {
   #page-container {
      margin-top: 80px;
   }
}

/* Footer */
.footer {
   background-color: var(--rust);
   width: 100%;
   height: 150px;
   color: black;
}

.footer-menu {
   text-align: center;
   display: inline-block;
}

.footer-link {
   text-decoration: none;
   color: black;
}

#footer-header {
   font-size: 20px;
}

#source-code-link a {
   color: blue;
}

#footer {
   position: absolute;
   bottom: 0;
   width: 100%;
   height: 150px;
   /* Footer height */
   background-color: var(--rust);
   color: black;

}

/* Template */
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
