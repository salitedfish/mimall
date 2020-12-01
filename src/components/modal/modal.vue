<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer">
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 1"
            v-on:click="$emit('submit')"
            >{{sureText}}</a
          >
          <a
            href="javascript:;"
            class="btn"
            v-else-if="btnType == 2"
            v-on:click="$emit('cancel')"
            >{{cancelText}}</a
          >
          <div class="btn-grop" v-else>
            <a href="javascript:;" class="btn" v-on:click="$emit('submit')"
              >{{sureText}}</a
            >
            <a
              href="javascript:;"
              class="btn btn-default"
              v-on:click="$emit('cancel')"
              >{{cancelText}}</a
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {};
  },
  props: {
    //弹框类型,small/middle/large/form
    modalType: {
      type: String,
      default: "form",
    },
    //弹框标题
    title: String,
    //按钮类型，1确定，2取消，3确定取消
    btnType: String,
    sureText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    showModal: Boolean,
  },
};
</script>

<style lang="scss" >
@import "../../assets/scss/config.scss";
@import "../../assets/scss/mixin.scss";
@import "./modal.scss";
@import "../../assets/scss/button.scss";
</style>