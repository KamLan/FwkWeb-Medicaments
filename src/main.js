import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import { store } from './store/index.js'
import { VueSpinners } from '@saeris/vue-spinners'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueSpinners)

new Vue({
  VueAxios,
  axios,
  store,
  router,
  VueSpinners,
  render: h => h(App),
}).$mount('#app')
