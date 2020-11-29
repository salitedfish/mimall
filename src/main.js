import Vue from "vue"
import router from "./router/index.js"
import axios from "axios"

import App from "./App.vue"

//给请求添加默认根路径和端口
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

//接口错误拦截
axios.interceptors.response.use(function (res) {
  let result = res.data;
  if (result.status == 0) {
    return result.data;
  } else if (res.status == 10) {
    window.location.href = "/#/login";
  } else {
    alert(result.msg);
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
