<template>
  <div>
    <order-header></order-header>
      these is cart
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from "../../components/orderheader/OrderHeader.vue"
import OrderFooter from "../../components/orderfooter/Orderfooter.vue"
export default {
  name: "cart",
  components: {
    OrderHeader,
    OrderFooter
  }
};
</script>

<style>
</style>