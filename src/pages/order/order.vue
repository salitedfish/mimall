<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from "../../components/orderheader/OrderHeader.vue"
import ServiceBar from "../../components/servicebar/ServiceBar.vue"
import NavFooter from "../../components/navfooter/NavFooter"
import OrderFooter from "../../components/orderfooter/Orderfooter.vue"

export default {
  components: {
    OrderHeader,
    ServiceBar,
    NavFooter,
    OrderFooter
  }
};
</script>

<style>
</style>