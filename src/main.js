import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router/index'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.component('Navbar', require('./components/Navbar.vue').default);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')