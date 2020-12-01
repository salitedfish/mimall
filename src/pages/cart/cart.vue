<template>
  <div>
    <order-header></order-header>
      these is cart
    <order-footer></order-footer>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "../../components/orderheader/OrderHeader.vue"
import OrderFooter from "../../components/orderfooter/Orderfooter.vue"
import NavFooter from "../../components/navfooter/NavFooter";

export default {
  name: "cart",
  components: {
    OrderHeader,
    OrderFooter,
    NavFooter
  }
};
</script>

<style>
</style>