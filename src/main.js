import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.use(BootstrapVue)

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