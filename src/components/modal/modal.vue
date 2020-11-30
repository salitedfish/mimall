<template>
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>标题</span>
        <a href="javascript:;" class="icon-close"></a>
      </div>
      <div class="modal-body">
        <slot name="modal-body"></slot>
      </div>
      <div class="modal-footer">
        <div class="btn-grop">
          <a href="javascript:;" class="btn">确定</a>
          <a href="javascript:;" class="btn btn-default">取消</a>
        </div>
      </div>
    </div>
  </div>
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
    btnText: {
      type: String,
      default: "确定",
    },
    canceText: {
      type: String,
      default: "取消",
    },
    showModal: Boolean,
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/config.scss";
@import "../../assets/scss/mixin.scss";
@import "../../assets/scss/modal.scss";
@import "../../assets/scss/button.scss"

</style>