<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menv">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, num) in item" :key="num">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        v-lazy="sub ? sub.img : '/images/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视盒子 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, num) in item" :key="num">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        v-lazy="sub ? sub.img : '/images/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, num) in item" :key="num">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        v-lazy="sub ? sub.img : '/images/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, num) in item" :key="num">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        v-lazy="sub ? sub.img : '/images/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, num) in item" :key="num">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        v-lazy="sub ? sub.img : '/images/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, num) in item" :key="num">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        v-lazy="sub ? sub.img : '/images/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, num) in item" :key="num">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        v-lazy="sub ? sub.img : '/images/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, num) in item" :key="num">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        v-lazy="sub ? sub.img : '/images/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in sliderList" :key="index">
            <a v-bind:href="'/#/product/' + item.id">
              <img v-bind:src="item.img" alt="1" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          :href="'/#/product/' + item.id"
          v-for="(item, index) in adsList"
          :key="index"
        >
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/images/banner-1.png'" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/images/mix-alpha.jpg'" alt="" />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, index) in phoneList" :key="index">
              <div class="item" v-for="(item, num) in arr" :key="num">
                <span v-show="num % 2 == 0" class="new-pro">新品</span>
                <span v-show="num % 2 == 1" class="kill-pro">秒杀</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt="" />
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}}</p>
                  <p class="price" v-on:click="addCart(item.id)">
                    {{ item.price | currency }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      :showModal="modal"
      @submit="gotoCart"
      @cancel="modal = false"
    >
      <template v-slot:modal-body>
        <p>商品添加成功，点击查看购物车</p>
      </template>
    </modal>
  </div>
</template>

<script>
import "swiper/css/swiper.css";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import axios from "axios";

import ServiceBar from "../../components/servicebar/ServiceBar.vue";
import Modal from "../../components/modal/modal.vue";

export default {
  name: "index",
  data() {
    return {
      //配置swiper插件
      swiperOption: {
        autoplay: {
          disableOnInteraction: false,
          delay: 2000,
        },
        loop: true,
        effect: "cube",
        cubeEffect: {
          sliderShows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.5,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      //轮播图图片数据
      sliderList: [
        {
          id: "42",
          img: "images/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "images/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "images/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "images/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "images/slider/slide-5.jpg",
        },
      ],
      //菜单数据
      menuList: [
        [
          {
            id: 30,
            img: "/images/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/images/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/images/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/images/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        {
          id: 33,
          img: "/images/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/images/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/images/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/images/ads/ads-4.jpg",
        },
      ],
      phoneList: [],
      modal: false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal,
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14,
          },
        })
        .then((res) => {
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    addCart(id) {
      axios
        .post("/carts", {
          productId: id,
          selected: false,
        })
        .then((res = { cartProductVoList: "" }) => {
          this.modal = true;
          this.$store.dispatch("saveCartCount", res.cartTotalQuantity);
          // this.$router.push("/cart");
        }).catch(()=>{
          this.$router.push("/login")
        });
    },
    gotoCart() {
      this.$router.push("/cart");
    },
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "$" + val.toFixed(2) + "元";
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/mixin.scss";
@import "../../assets/scss/config.scss";

.index {
  .swiper-box {
    .nav-menv {
      position: absolute;
      box-sizing: border-box;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
              // opacity: 1;
            }
          }
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #fff;
            padding-left: 20px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: "";
              @include bgImg(10px, 15px, "/images/icon-arrow.png");
            }
          }
          .children {
            display: none;
            // opacity: 0;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
                z-index: 10;
                a {
                  color: $colorB;
                  font-size: 14px;
                  img {
                    width: 42px;
                    height: 35px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 270px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 295px;
      height: 167px;
      img {
        border-radius: 10px;
      }
    }
  }
  .banner {
    margin-bottom: 50px;
    img {
      border-radius: 10px;
    }
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              border-radius: 5px;
              margin-top: 5px;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  content: "";
                  @include bgImg(22px, 22px, "/images/icon-cart-hover.png");
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>