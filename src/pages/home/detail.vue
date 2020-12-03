<template>
  <div class="detail">
    <product-param :name="product.name"> </product-param>
    <div class="container">
      <div class="detail-content">
        <div class="swipper-detail">
          <swiper :options="swiperOption">
            <swiper-slide>
              <img src="/images/detail/phone-1.jpg" alt="1" />
            </swiper-slide>
            <swiper-slide>
              <img src="/images/detail/phone-2.jpg" alt="1" />
            </swiper-slide>
            <swiper-slide>
              <img src="/images/detail/phone-3.jpg" alt="1" />
            </swiper-slide>
            <swiper-slide>
              <img src="/images/detail/phone-4.jpg" alt="1" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <div class="detail-info">
          <h3>{{ product.name }}</h3>
          <div class="information">
            相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS /
            骁龙845处理器 / 红 外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
          </div>
          <div class="sell-people">小米自营</div>
          <div class="price">
            <span class="price-new">{{ product.price }}元</span>
            <span class="price-old">{{ product.price }}元</span>
          </div>
          <div class="address-box">
            <i class="icon-add"></i>
            <div class="address">
              北京 北京市 朝阳区 安定门街道
              <a href="javascript:;" class="revice">修改</a>
            </div>
            <div class="had-now">有现货</div>
          </div>
          <div class="edition">
            <div class="text">选择版本</div>
            <div class="choice">
              <div
                class="choice-no"
                :class="{ choiced: version == 1 }"
                @click="version = 1"
              >
                6GB+64GB 全网通 <span>1099元</span>
              </div>
              <div
                class="choice-no"
                :class="{ choiced: version == 2 }"
                @click="version = 2"
              >
                4GB+64GB 移动4G <span>1049元</span>
              </div>
            </div>
          </div>
          <div class="color">
            <div class="text">选择颜色</div>
            <div class="color-one">
              <div class="color-box"></div>
              <div class="color-text">深空灰</div>
            </div>
          </div>
          <div class="result">
            <span class="result-choice"
              >{{ product.name }}
              {{
                version == 1 ? "6GB+64GB 全网通" : "4GB+64GB 移动4G"
              }}
              深灰色</span
            >
            <span class="result-price-one">{{ product.price }}元</span>
            <span class="result-price-two">{{ product.price }}元</span>
            <div class="result-price-new">总计: {{ product.price }}元</div>
          </div>
          <button class="btn btn-huge" @click="addCart">加入购物车</button>
          <button class="btn btn-default">喜欢</button>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import axios from "axios";
import ProductParam from "../../components/productparam/productparam.vue";
import ServiceBar from "../../components/servicebar/ServiceBar.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    ProductParam,
  },
  name: "detail",
  data() {
    return {
      version: 1,
      product: {},
      swiperOption: {
        autoplay: {
          disableOnInteraction: false,
          delay: 2000,
        },
        loop: true,
        effect: "slide",
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
    };
  },
  mounted() {
    this.getProductDetail();
  },
  methods: {
    getProductDetail() {
      let productId = this.$route.params.id;
      axios.get(`/products/${productId}`).then((res) => {
        this.product = res;
        console.log(this.product);
      });
    },
    addCart() {
      axios.post('/carts',{
        productId:this.product.id,
        selected: true
      }).then((res={cartProductVoList:""})=>{
        this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
        this.$router.push("/cart");
      })
    }
  },
};
</script>

<style lang="scss">
.detail-content {
  display: flex;
  .swipper-detail {
    box-sizing: border-box;
    height: 870px;
    width: 640px;
    padding-top: 90px;
    padding-right: 77px;
    text-align: center;
    img {
      // width: 384px;
      height: 486px;
    }
  }
  .detail-info {
    width: 586px;
    padding: 30px 0 50px;
    h3 {
      font-size: 28px;
      line-height: 60px;
    }
    .information {
      font-size: 14px;
      line-height: 22px;
      color: #999;
    }
    .sell-people {
      font-size: 16px;
      line-height: 22px;
      color: #ff6700;
      margin-top: 26px;
      font-weight: Regular;
      font-family: PingFangSC-Regular;
    }
    .price {
      vertical-align: middle;
      margin-top: 14px;
      height: 45px;
      border-bottom: 1px solid #e5e5e5;
      .price-new {
        font-size: 20px;
        line-height: 22px;
        color: #ff6700;
        margin-right: 9px;
      }
      .price-old {
        font-size: 14px;
        line-height: 22px;
        color: #999;
        text-decoration: line-through;
      }
    }
    .address-box {
      font-size: 14px;
      line-height: 30px;
      border: 1px solid #e5e5e5;
      color: #666;
      padding: 15px 0 15px 64px;
      .address {
        a {
          color: #ff6700;
          margin-left: 20px;
        }
      }
      .had-now {
        color: #ff6700;
      }
    }
    .edition {
      .text {
        font-size: 18px;
        line-height: 60px;
      }
      .choice {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        font-size: 16px;
        line-height: 60px;
        .choice-no {
          box-sizing: border-box;
          // width: 48%;
          color: #333;
          border: 1px solid #e5e5e5;
          padding-left: 34px;
          padding-right: 34px;
          span {
            color: #666;
            margin-left: 10px;
          }
        }
        .choiced {
          color: #ff6700;
          border: 1px solid #ff6600;
          span {
            color: #666;
            margin-left: 10px;
          }
        }
      }
    }
    .color {
      .text {
        font-size: 18px;
        line-height: 60px;
      }
      .color-one {
        position: relative;
        border: 1px solid #ff6600;
        box-sizing: border-box;
        font-size: 16px;
        line-height: 60px;
        color: #ff6700;
        padding-left: 34px;
        padding-right: 34px;
        width: 270px;
        text-align: center;
        .color-box {
          position: absolute;
          top: 23px;
          left: 80px;
          width: 14px;
          height: 14px;
          background-color: #666;
        }
      }
    }
    .result {
      background-color: #fafafa;
      margin-top: 50px;
      color: #333;
      font-size: 14px;
      // line-height: 60px;
      padding: 30px 30px;
      .result-choice {
      }
      .result-price-one {
        margin-left: 180px;
      }
      .result-price-two {
        margin-left: 10px;
        color: #666;
        text-decoration: underline;
      }
      .result-price-new {
        margin-top: 18px;
        color: #ff6600;
        font-size: 24px;
        line-height: 24px;
      }
    }
    .btn-huge {
      margin-top: 30px;
      margin-right: 21px;
    }
    .btn-default {
      width: 142px;
      height: 54px;
    }
  }
}
</style>