<template>
  <div class="nav-footer">
    <div class="footer-logo">
      <img src="../../assets/images/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.bilibili.com/" target="_blank">河畔一角</a><span>|</span>
      <a href="https://cn.portal-pokemon.com/play/pokedex" target="_blank">Vue全栈课程</a><span>|</span>
      <a href="">React全家桶课程</a><span>|</span>
      <a href="">微信支付课程</a>
    </div>
    <div class="copy-right">Copyright 2019 <span>mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
}
</script>

<style lang="scss">
  .nav-footer {
    height: 234px;
    border-top: 4px solid #ff6600;
    background-color: #333333;
    color: #999;
    font-size: 16px; 
    text-align: center;
    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;
      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link {
      margin-bottom: 15px;
      a {
        color: #999;
        display: inline-block;
      }
      span {
        margin: 0 15px;
      }
    }
    .copy-right {
      span {
        color: #ff6600;
      }
    }
  }

</style>