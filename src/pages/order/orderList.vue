<template>
  <div class="order-list">
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="showLoading"></loading>
          <div class="order" v-for="(item, index) in orderList" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{ item.createTime }}
                <span>|</span>
                {{ item.receiverName }}
                <span>|</span>
                订单号：{{ item.orderNo }}
                <span>|</span>
                {{ item.paymentTypeDesc }}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{ item.payment }}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div
                  class="good-list"
                  v-for="(good, ind) in item.orderItemVoList"
                  :key="ind"
                >
                  <div class="good-img">
                    <img :src="good.productImage" alt="" />
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{ good.productName }}</div>
                    <div class="p-money">
                      {{ `${good.totalPrice}×${good.quantity}` }}元
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-state fr">
                <a href="javascript:;" v-if="item.status == 20">{{
                  item.statusDesc
                }}</a>
                <a href="javascript:;" v-else @click="goPay(item.orderNo)">{{
                  item.statusDesc
                }}</a>
              </div>
            </div>
          </div>
          <!-- <a-pagination v-if="total > 0" show-less-items> </a-pagination>
          <div class="load-more">
            <a-button type="primary">加载更多</a-button>
          </div>
          <no-data></no-data> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "../../components/payloading/payLoading.vue"
export default {
  name: "orderlist",
  data() {
    return {
      orderList: [],
      showLoading: true,
    };
  },
  components: {
    Loading
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    getOrderList() {
      axios.get("/orders").then((res) => {
        this.orderList = res.list;
        this.showLoading = false;
      });
    },
    goPay(orderNo) {
      this.$router.push({
        path: "/order/pay",
        query:{
          orderNo
        } 
      })
    }
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/config.scss";
@import "../../assets/scss/mixin.scss";
.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;
    .order-box {
      .order {
        border: 1px solid $colorF;
        background-color: $colorG;
        margin-bottom: 31px;
        &:last-child {
          margin-bottom: 0;
        }
        .order-title {
          height: 74px;
          line-height: 74px;
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;
          .item-info {
            span {
              margin: 0 9px;
            }
          }
          .money {
            font-size: 26px;
            color: $colorB;
          }
        }
        .order-content {
          padding: 0 43px;
          .good-box {
            width: 88%;
            .good-list {
              display: flex;
              align-items: center;
              height: 145px;
              .good-img {
                width: 112px;
                img {
                  width: 100%;
                }
              }
              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }
          .good-state {
            height: 145px;
            line-height: 145px;
            font-size: 20px;
            color: $colorA;
            a {
              color: $colorA;
            }
          }
        }
      }
      .pagination {
        text-align: right;
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #ff6600;
      }
      .el-button--primary {
        background-color: #ff6600;
        border-color: #ff6600;
      }
      .load-more,
      .scroll-more {
        text-align: center;
      }
    }
  }
}
</style>