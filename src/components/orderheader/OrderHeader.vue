<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>{{ title }}<slot name="tip"></slot></h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{ username }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-header",
  data() {
    return {
      // username: ""
    };
  },
  props: {
    title: {
      type: String,
      default: "输入参数",
    },
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
};
</script>

<style lang="scss">
// @import "../../assets/scss/base.scss";
.order-header {
  padding: 30px 0;
  border-bottom: 2px solid #ff6600;
  .header-logo {
    float: left;
  }
  .title,
  .username {
    display: inline-block;
    height: 55px;
    line-height: 55px;
  }
  .title {
    float: left;
    margin-left: 54px;
    h2 {
      font-size: 28px;
      color: #333;
    }
    span {
      font-size: 14px;
      margin-left: 17px;
      color: #999;
      font-weight: 400;
    }
  }
  .username {
    float: right;
    a {
      color: #666;
      font-size: 16px;
    }
  }
}
</style>