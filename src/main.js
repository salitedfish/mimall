import Vue from "vue"
import router from "./router/index.js"
import store from "./store/index.js"
import axios from "axios"
import VueLazyLoad from "vue-lazyload"
import VueCookie from "vue-cookie"

import App from "./App.vue"

//给请求添加默认根路径和端口
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

//接口错误拦截
//因为这个项目服务器并不会返回错误信息，所以main.js
//里面根据请求返回的status模拟状态信息，如果失败则返回
//了一个promise.reject(res)
axios.interceptors.response.use(function (res) {
  let result = res.data;
  let path = location.hash;
  if (result.status == 0) {
    return result.data;
  } else if (result.status == 10) {
    console.log(path)
    if (path != "#/index" && path.indexOf("#/product") == -1) window.location.href = "/#/login";
  } else {
    return Promise.reject(res)
  }
});

Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  loading: "/images/loading-svg/loading-bars.svg"
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
