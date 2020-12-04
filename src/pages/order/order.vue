<template>
  <div>
    <order-header :title="title">
      <template v-slot:tip>
        <span>{{ tips }}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "../../components/orderheader/OrderHeader.vue";
import ServiceBar from "../../components/servicebar/ServiceBar.vue";
import NavFooter from "../../components/navfooter/NavFooter";

export default {
  components: {
    OrderHeader,
    ServiceBar,
    NavFooter,
  },
  data() {
    return {
      title: "",
      tips: "",
    };
  },
  mounted() {
    let path = this.$route.path;
    if (path == "/order/confirm") {
      this.title = "订单确认";
      this.tips = "请认真填写地址";
    } else if (path == "/order/list") {
      this.title = "订单列表";
      this.tips = "麻烦认真查看订单列表";
    } else if (path == "/order/pay") {
      this.title = "订单支付";
      this.tips = "谨防诈骗电话和钓鱼网站";
    }
  },
};
</script>

<style>
</style>