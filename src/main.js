import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mock/mockServe'
import store from './store'
import  'lib-flexible/flexible'
import api from './api'
Vue.prototype.$api = api
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
