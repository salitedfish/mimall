<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:">小米商城</a>
          <a href="javascript:">MIUI</a>
          <a href="javascript:">云服务</a>
          <a href="javascript:">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:" v-if="changeUsername">{{ changeUsername }}</a>
          <a href="javascript:" v-else v-on:click="login">登录</a>
          <a href="javascript:" v-if="changeUsername">我的订单</a>
          <a href="javascript:" v-else v-on:click="login">注册</a>
          <a href="javascript:" class="my-cart" v-on:click="goToCart">
            <span class="icon-cart"> </span>
            购物车({{ cartCount }})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" v-bind:alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmin手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">8D电视</div>
                    <div class="pro-price">3600万</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">8D电视</div>
                    <div class="pro-price">1亿</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">8D电视</div>
                    <div class="pro-price">1900万</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">8D电视</div>
                    <div class="pro-price">2亿</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">8D电视</div>
                    <div class="pro-price">3亿</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">8D电视</div>
                    <div class="pro-price">100亿</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">8D电视</div>
                    <div class="pro-price">3600万</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">8D电视</div>
                    <div class="pro-price">1亿</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">8D电视</div>
                    <div class="pro-price">1900万</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">8D电视</div>
                    <div class="pro-price">2亿</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">8D电视</div>
                    <div class="pro-price">3亿</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">8D电视</div>
                    <div class="pro-price">100亿</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "nav-header",
  data() {
    return {
      phoneList: [],
    };
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "$" + val.toFixed(2) + "元";
    },
  },
  mounted() {
    this.getProductList();
  },
  computed: {
    changeUsername() {
      return this.$store.state.username;
    },
    cartCount() {
      return this.$store.state.cartCount;
    },
  },
  methods: {
    //跳转到登录界面，这里把注册和登录做到一起了
    login() {
      this.$router.push("/login");
    },
    getProductList() {
      //给请求添加默认根路径和端口
      axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6,
          },
        })
        .then((res) => {
          // console.log(res)
          if (res.list.length >= 6) {
            this.phoneList = res.list.slice(0, 6);
            // console.log(this.phoneList)
          }
        });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/base.scss";
@import "../../assets/scss/mixin.scss";
@import "../../assets/scss/config.scss";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        margin-right: 0;
        .icon-cart {
          @include bgImg(
            16px,
            12px,
            "../../assets/images/icon-cart-checked.png"
          );
          margin-right: 3px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      position: relative;
      @include flex();
      .header-menu {
        display: inline-block;
        width: 640px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 50px;
          span {
            cursor: pointer;
          }
          .children {
            // display: none; //临时
            height: 0;
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            // height: 220px;
            overflow: hidden;
            border-top: 1px solid $colorH;
            z-index: 10;
            transition: height 0.5s;
            background-color: #fff;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;

              &:before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0px;
                border-left: 1px solid $colorF;
                height: 100px;
              }
              &:last-child:before {
                display: none;
              }
              a {
                display: inline-block;
              }
              img {
                height: 111px;
                width: auto;
                margin-top: 26px;
              }
              .pro-img {
                height: 132px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
            }
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              display: block;
              box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, "../../assets/images/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>