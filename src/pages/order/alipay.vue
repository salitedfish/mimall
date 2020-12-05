<template>
  <div>
    <div class="ali-pay">
      <pay-loading v-if="loading"></pay-loading>
      <div class="form" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PayLoading from "../../components/payloading/payLoading.vue";
export default {
  name: "alipay",
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: "",
      loading: true,
    };
  },
  components: {
    PayLoading,
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      axios
        .post("/pay", {
          orderId: this.orderId,
          orderName: "Vue高仿小米商城",
          amount: 0.01,
          payType: 1,
        })
        .then((res) => {
          this.content = res.content;
          //alipay其实只是个中间页，等待请求完成后，
          //渲染请求返回来的html代码,这串代码是一个
          //表单，渲染完成后进行提交
          let pay = setInterval(() => {
            if (document.getElementById("bestPayForm")) {
              document.getElementById("bestPayForm").submit();
              clearInterval(pay);
            }
          }, 100);
        });
    },
  },
};
</script>

<style>
</style>