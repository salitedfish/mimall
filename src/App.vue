<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    //初始化完成后就发请求，验证登录信息
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("/user")
        .then((res) => {
          //页面初始化时就携带cookie发送请求，服务器验证通过会返回用户信息
          //根据用户信息更改vuex的参数,然后在请求购物车信息
          this.$store.dispatch("saveUserName", res.username);
          this.getCartCount();
        })
        .catch(() => {
          console.log("还未登录");
        });
    },
    getCartCount() {
      axios.get("/carts/products/sum").then((res) => {
        this.$store.dispatch("saveCartCount", res);
      });
    },
  },
  components: {},
};
</script>


<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
</style>
