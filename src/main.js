import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./mock/mockServe";
import store from "./store";
import "lib-flexible/flexible";
import api from "./api";
import BScroll from "@better-scroll/core";
import "animate.css";
import VueLazyload  from 'vue-lazyload'
Vue.prototype.$api = api;
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/error.png',
  loading: '/loading.gif',
  attempt: 1
})
// betterScroll
Vue.directive("scrollx", {
  inserted: function(el) {
    el.bscroll = new BScroll(el, {
      scrollX: true,
      click: true,
      probeType: 3 // listening scroll hook
    });
  },
  componentUpdated: function(el) {
    el.bscroll.refresh();
  }
});
// animate css 动画
Vue.directive("animate", {
  inserted(el, { value }) {
    el.classList.add("animated")
    el.classList.add("faster")
    el.addEventListener("click", () => {
      el.classList.add(value);
    });
    el.addEventListener("animationend", () => {
      el.classList.remove(value);
    });
  }
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
