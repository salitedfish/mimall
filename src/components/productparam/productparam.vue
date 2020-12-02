<template>
  <div class="zhanwei">
    <div class="nav-bar" v-bind:class="{ isFixed: isFixed }">
      <div class="container">
        <div class="pro-title">{{ name }}</div>
        <div class="pro-param">
          <a href="JavaScript:;">概述</a><span>|</span>
          <a href="JavaScript:;">参数</a><span>|</span>
          <a href="JavaScript:;">用户评价</a>
          <slot name="buy"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      isFixed: false,
    };
  },
  props: {
    name,
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    initHeight() {
      let scrollTop =
        window.pageYOffect ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 152 ? true : false;
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight, false);
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/config.scss";
@import "../../assets/scss/mixin.scss";
.zhanwei {
  height: 70px;
  z-index: 30;
  background-color: $colorG;

}
.nav-bar {
  height: 70px;
  line-height: 70px;
  border: 1px solid $colorH;
  background-color: $colorG;
  z-index: 30;

  &.isFixed {
    position: fixed;
    top: 0;
    width: 100%;
    // box-shadow: 0 5px 5px $colorE;
    // z-index: 10;
  }
  .container {
    @include flex();
    .pro-title {
      font-size: $fontH;
      // color: $colorB;
      font-weight: bold;
    }
    .pro-param {
      font-size: $fontJ;
      a {
        color: $colorC;
        margin-right: 10px;
      }
      span {
        margin-right: 10px;
      }
    }
  }
}
</style>