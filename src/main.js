import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

// Vue.config.productionTip = false

// Vue.use({
//   install (Vue) {
//   Vue.prototype.$api = axios.create({
//     baseURL: 'http://localhost:3000/'
//   })
// }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
