<template>
<div>
   <mdb-navbar color="indigo" position="top" light expand="small">
      <router-link to="/">
         <mdb-navbar-brand class="navbar-brand" href="https://mdbootstrap.com/">
            Pizza House
         </mdb-navbar-brand>
      </router-link>
      <mdb-navbar-toggler class="navbar-collapse collapse">
         <mdb-navbar-nav class="navbar-nav ml-auto" right>
            <router-link to="/menu">
               <mdb-nav-item class="nav-link">Menu</mdb-nav-item>
            </router-link>
            <router-link to="/learn">
               <mdb-nav-item class="nav-link">Learn</mdb-nav-item>
            </router-link>
            <router-link to="/about">
               <mdb-nav-item class="nav-link">About</mdb-nav-item>
            </router-link>
         </mdb-navbar-nav>
      </mdb-navbar-toggler>
   </mdb-navbar>

   <center>
      <div class="line"></div>
      <br>
   </center>
</div>
</template>

<script scoped>
import {
   mdbNavbar,
   mdbNavbarBrand,
   mdbNavbarToggler,
   mdbNavbarNav,
   mdbNavItem
} from 'mdbvue';

export default {
   name: 'Navbar',
   components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem
   }
}
</script>

<style>
.nav-item {
   font-size: 20px;
   color: var(--rust);
}

.navbar {
   background: rgba(255, 255, 255, 1);
   background-color: var(--white);
}

.home .navbar {
   background: rgba(255, 255, 255, .5);
}

.line {
   width: 90%;
   height: 1px;
   background-color: var(--rust);
   margin-left: 5%;
   box-shadow: 1px 1px 1px grey;
   margin-top: -7px;
   position: fixed;
   z-index: 10;
}

.navbar-brand {
   color: black;
   margin: -10px 20px;
   font-size: 58px;
}

/* Mobile Styles */
@media only screen and (max-width: 500px) {
   .navbar-brand {
      margin: -10px 5px;
      font-size: 42px;
   }

   .line {
      margin-top: -11px;
   }
}

/* Tablet Styles */
@media only screen and (min-width: 501px) and (max-width: 960px) {
   .navbar-brand {
      margin: -10px 10px;
      font-size: 52px;
   }

   .line {
      margin-top: -16px;
   }
}
</style>
