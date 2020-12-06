<template>
  <div class="order-list">
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="showLoading"></loading>
          <no-data v-if="!showLoading && orderList.length == 0"></no-data>
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
                    <img v-lazy="good.productImage" alt="" />
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
          <el-pagination background 
          layout="prev,pager,next" 
          :pageSize="pageSize"
          :total="total"
          @current-change="handleChange"
          class="pagination"
          >
          </el-pagination>
          <!-- <div class="load-more">
            <el-button type="primary" :loading="showLoading">加载更多</el-button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "../../components/payloading/payLoading.vue";
import NoData from "../../components/nodata/noData.vue";
import { Pagination,Button } from "element-ui";
export default {
  name: "orderlist",
  data() {
    return {
      orderList: [],
      showLoading: true,
      pageSize: 5,
      pageNum: 1,
      total: 0,
    };
  },
  components: {
    Loading,
    NoData,
    [Pagination.name]: Pagination,
    [Button.name]: Button,
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    getOrderList() {
      axios
        .get("/orders",{
          params: {
            pageSize: 5,
            pageNum: this.pageNum
          }
        })
        .then((res) => {
          this.orderList = res.list;
          this.total = res.total;
          this.showLoading = false;
        })
        .catch(() => {
          this.showLoading = false;
        });
    },
    goPay(orderNo) {
      this.$router.push({
        path: "/order/pay",
        query: {
          orderNo,
        },
      });
    },
    handleChange(pageNum) {
      this.pageNum = pageNum;
      this.getOrderList()
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