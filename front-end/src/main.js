import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import UniqueId from 'vue-unique-id';
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'


Vue.use(BootstrapVue)
Vue.use(VueCookies)
Vue.use(UniqueId);

Vue.$cookies.config('7d');
// Set cookie expiration data to 1 year later
Vue.$cookies.config(60 * 60 * 24 * 365, '');

Vue.config.productionTip = false

let data = {
   pizzas: mock.pizzas,
   sizes: mock.sizes
}

new Vue({
   router,
   data,
   render: h => h(App)
}).$mount('#app')