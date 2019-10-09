import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mock/mockServe'
import store from './store'
import  'lib-flexible/flexible'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
