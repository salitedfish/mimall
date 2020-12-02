<template>
  <div class="product">
    <product-param :name="productInfo.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-param>
    <div class="content">
      <div class="item-bg">
        <h2>{{ productInfo.name }}</h2>
        <h3>{{ productInfo.subtitle }}</h3>
        <p>
          <a href="">全球首款双频 GP</a>
          <span>|</span>
          <a href="">骁龙845</a>
          <span>|</span>
          <a href="">AI 变焦双摄</a>
          <span>|</span>
          <a href="">红外人脸识别</a>
        </p>
        <div class="price">
          <span
            >￥<em>{{ productInfo.price }}</em></span
          >
        </div>
      </div>
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption" class="swiper-item">
          <!-- <swiper-slide><img src="/images/gallery-1.png" alt=""></swiper-slide> -->
          <swiper-slide
            ><img src="/images/gallery-2.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/images/gallery-3.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/images/gallery-4.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/images/gallery-5.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/images/gallery-6.jpg" alt=""
          /></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <h2>60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现的淋漓尽致！<br />
          更能AI 精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <div class="video-bg" @click="showVideos"></div>
        <div class="video-box" >
          <div class="overlay" v-show="showVideo"></div>
          <div class="video" v-bind:class="{ slide: showVideo }">
            <span class="icon-close" @click="closeVideos"></span>
            <video
              src="/images/video.mp4"
              muted
              autoplay
              controls="controls"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import axios from "axios";
import ProductParam from "../../components/productparam/productparam.vue";
export default {
  name: "product",
  data() {
    return {
      swiperOption: {
        //设置自动播放
        autoplay: {
          disableOnInteraction: false,
          delay: 2000,
        },
        //设置是否轮播
        loop: true,
        //设置轮播方式
        effect: "slide",
        cubeEffect: {
          sliderShows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.5,
        },
        //设置同时展示数量
        slidesPerView: 3,
        //设置轮播图间距
        spaceBetween: 15,
        //设置分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      showVideo: false,
      productInfo: {},
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    ProductParam,
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    showVideos() {
      this.showVideo = !this.showVideo;
    },
    closeVideos() {
      this.showVideo = !this.showVideo;
    },
    getProduct() {
      let productId = this.$route.params.id;
      axios.get(`/products/${productId}`).then((res) => {
        this.productInfo = res;
        // console.log(this.productInfo)
      });
    },
    buy() {
      let productId = this.$route.params.id;
      this.$router.push("/detail/" + productId);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/mixin.scss";
.product {
  .content {
    .item-bg {
      background: url("/images/product-bg-1.png") no-repeat center;
      height: 718px;
      text-align: center;
      padding-top: 55px;
      h2 {
        font-size: 80px;
        // margin-top: 55px;
        color: #333;
      }
      h3 {
        font-size: 24px;
        color: #333;
        letter-spacing: 10px;
        font-weight: Semibold;
        font-family: PingFangSC-Semibold;
      }
      p {
        margin-top: 21px;
        a {
          color: #333;
          font-size: 16px;
        }
        span {
          color: #bfab9d;
          margin: 0 15px;
        }
      }
      .price {
        margin-top: 30px;
        span {
          font-size: 30px;
          em {
            font-size: 38px;
          }
        }
      }
    }
    .item-bg-2 {
      background: url("/images/product-bg-2.png") no-repeat center;
      height: 480px;
      background-size: 1226px 397px;
    }
    .item-bg-3 {
      background: url("/images/product-bg-3.png") no-repeat center;
      height: 638px;
      background-size: 100% 638px;
    }
    .item-swiper {
      height: 352px;
      margin: 30px 0px;
      
      img {
        width: 100%;
        // z-index: 0;
      }
    }

    .item-video {
      text-align: center;
      background-color: #070708;
      color: #fff;
      padding: 50px 0px;
      .video-bg {
        height: 540px;
        width: 1226px;
        margin: 30px auto 0;
        background: url("/images/gallery-1.png") no-repeat center;
      }
      .video-box {
        .overlay {
          @include position(fixed);
          background-color: #333;
          z-index: 10;
          opacity: 0.4;
        }
        .video {
          z-index: 20;
          position: fixed;
          top: -200%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: all 1s;
          &.slide {
            top: 50%;
            opacity: 1;
          }
          .icon-close {
            width: 20px;
            height: 20px;
            background: url("/images/icon-close.png") no-repeat center;
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 30;
            cursor: pointer;
          }
          video {
            height: 700px;
          }
        }
      }
    }
  }
}
</style>