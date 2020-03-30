import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Pizza from '../views/Pizza.vue'
import Build from '../views/Build.vue'
import Learn from '../views/Learn.vue'

Vue.use(VueRouter)

const routes = [{
      path: '/',
      name: 'Home',
      component: Home
   },
   {
      path: '/menu',
      name: 'Menu',
      component: Menu
   },
   {
      path: '/pizza/:id',
      name: 'Pizza',
      component: Pizza
   },
   {
      path: '/build',
      name: 'Build',
      component: Build
   },
   {
      path: '/learn',
      name: 'Learn',
      component: Learn
   },
   {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
         return savedPosition
      }
      return {
         x: 0,
         y: 0
      }

   },
   routes
})

export default router