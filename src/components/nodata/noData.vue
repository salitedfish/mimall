<template>
  <div class="no-data">
    <img src="/images/icon-no-data.png" alt="">
    <p>当前暂无记录</p>
  </div>
</template>

<script>
export default {
  name: "nodata"
}
</script>

<style lang="scss">
.no-data {
  text-align: center;
  font-size: 20px;
  color: #999;
  margin-top: 70px;
  img{
    width: 420px;
  }
}
</style>