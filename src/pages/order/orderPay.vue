<template>
  <div class="order-pay">
    <div class="wrapper">
      <div class="container">
        <div class="order-wrap">
          <!-- 以下为订单详情------------------------------------------>
          <div class="item-order">
            <div class="icon-succ"></div>
            <div class="order-info">
              <h2>订单提交成功！去付款咯～</h2>
              <p>请在<span>30分</span>内完成支付, 超时后将取消订单</p>
              <p>收货信息：{{ addressInfo }}</p>
            </div>
            <div class="order-total">
              <p>
                应付总额：<span>{{ payMent }}</span> 元
              </p>
              <p>
                订单详情<em
                  class="icon-down"
                  :class="{ up: showDetail }"
                  @click="showDetail = !showDetail"
                ></em>
              </p>
            </div>
          </div>
          <!-- 以下为商品详情 ----------------------------------------->
          <div class="item-detail" v-if="showDetail">
            <div class="item">
              <div class="detail-title">订单号：</div>
              <div class="detail-info theme-color">{{ orderId }}</div>
            </div>
            <div class="item">
              <div class="detail-title">收货信息：</div>
              <div class="detail-info">{{ addressInfo }}</div>
            </div>
            <div class="item good">
              <div class="detail-title">商品名称：</div>
              <div class="detail-info">
                <ul>
                  <li v-for="(item, index) in goodsList" :key="index">
                    <img :src="item.productImage" />{{ item.productName }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="detail-title">发票信息：</div>
              <div class="detail-info">电子发票 个人</div>
            </div>
          </div>
        </div>
        <!-- 以下为支付方式--------------------------------------- -->
        <div class="item-pay">
          <h3>选择以下支付方式付款</h3>
          <div class="pay-way">
            <p>支付平台</p>
            <div
              class="pay pay-ali"
              :class="{ checked: payType == 1 }"
              @click="paySubmit(1)"
            ></div>
            <div
              class="pay pay-wechat"
              :class="{ checked: payType == 2 }"
              @click="paySubmit(2)"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 以下为微信二维码弹框---------------------------------- -->
    <scan-pay-code
      v-if="showWxPay"
      @close="closeWxPay"
      :img="QRImg"
    ></scan-pay-code>
    <!-- 以下为让用户手动选择是否已经完成支付------------------- -->
    <modal
      title="支付确认"
      btnType="3"
      sureText="查看订单"
      cancelText="未支付"
      :showModal="showPayModal"
      @cancel="showPayModal = false"
      @submit="goOrderList"
    >
      <template v-slot:modal-body>
        <p>您确认是否完成支付？</p>
      </template>
    </modal>
  </div>
</template>

<script>
import axios from "axios";
import QRCode from "qrcode";
import Modal from "../../components/modal/modal.vue";
import ScanPayCode from "../../components/scanpaycode/ScanPayCode.vue";

export default {
  name: "orderpay",
  data() {
    return {
      showDetail: false,
      orderId: "",
      addressInfo: "", //地址信息
      payMent: "",
      goodsList: "", //订单详情，包含了商品列表
      payType: 1,
      showWxPay: false,
      QRImg: "",
      showPayModal: false,
      loop: "",
    };
  },
  components: {
    Modal,
    ScanPayCode,
  },
  mounted() {
    this.getOrderDetail();
  },
  methods: {
    getOrderDetail() {
      this.orderId = this.$route.query.orderNo;
      // console.log(this.orderNo)
      axios.get(`/orders/${this.orderId}`).then((res) => {
        let item = res.shippingVo;
        this.addressInfo = `${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress}`;
        this.goodsList = res.orderItemVoList;
        this.payMent = res.payment;
      });
    },
    paySubmit(payType) {
      this.payType = payType;
      //payType==1为支付宝支付，会跳转到支付宝对应页面
      if (payType == 1) {
        window.open("/#/order/alipay?orderId=" + this.orderId, "_blank");
      }
      //payType==2为微信支付
      else if (payType == 2) {
        axios
          .post("/pay", {
            orderId: this.orderId,
            orderName: "Vue高仿小米商城",
            amount: 0.01,
            payType: 2,
          })
          .then((res) => {
            QRCode.toDataURL(res.content).then((url) => {
              this.showWxPay = true;
              this.QRImg = url;
              this.loopOrderState();
            });
          }).catch((res)=>{
            this.$message.error(res)
          });
      }
    },
    //以下为关闭微信二维码弹窗
    closeWxPay() {
      this.showWxPay = false;
      this.showPayModal = true;
      clearInterval(this.loop);
    },
    //用来轮询当前订单支付状态
    loopOrderState() {
      this.loop = setInterval(() => {
        axios.get(`/orders/${this.orderId}`).then((res) => {
          if (res.status == 20) {
            clearInterval(this.loop);
            this.goOrderList();
          }
        });
      }, 1000);
    },
    //转换到订单列表
    goOrderList() {
      this.$router.push("/order/list");
    },
  },
};
</script>

<style lang="scss">
.order-pay {
  .wrapper {
    background-color: #f5f5f5;
    padding-top: 30px;
    padding-bottom: 61px;
    .order-wrap {
      padding: 62px 50px;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 30px;
      .item-order {
        display: flex;
        align-items: center;
        .icon-succ {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: url("/images/icon-gou.png") #80c58a no-repeat center;
          background-size: 60px;
          margin-right: 40px;
        }
        .order-info {
          margin-right: 248px;
          h2 {
            font-size: 24px;
            color: #333333;
            margin-bottom: 20px;
          }
          p {
            color: #666666;
            span {
              color: #ff6700;
            }
          }
        }
        .order-total {
          & > p:first-child {
            margin-bottom: 30px;
          }
          span {
            font-size: 28px;
            color: #ff6700;
          }
          .icon-down {
            display: inline-block;
            width: 14px;
            height: 10px;
            background: url("/images/icon-down.png") no-repeat center;
            background-size: contain;
            margin-left: 9px;
            transition: all 0.5s;
            cursor: pointer;
            &.up {
              transform: rotate(180deg);
            }
          }
          .icon-up {
            transform: rotate(180deg);
          }
        }
      }
      .item-detail {
        border-top: 1px solid #d7d7d7;
        padding-top: 47px;
        padding-left: 130px;
        font-size: 14px;
        margin-top: 45px;
        .item {
          margin-bottom: 19px;
          .detail-title {
            float: left;
            width: 100px;
          }
          .detail-info {
            display: inline-block;
            img {
              width: 30px;
              vertical-align: middle;
            }
          }
        }
      }
    }
    .item-pay {
      padding: 26px 50px 72px;
      background-color: #ffffff;
      color: #333333;
      h3 {
        font-size: 20px;
        font-weight: 200;
        color: #333333;
        padding-bottom: 24px;
        border-bottom: 1px solid #d7d7d7;
        margin-bottom: 26px;
      }
      .pay-way {
        font-size: 18px;
        .pay {
          display: inline-block;
          width: 188px;
          height: 64px;
          border: 1px solid #d7d7d7;
          cursor: pointer;
          &:last-child {
            margin-left: 20px;
          }
          &.checked {
            border: 1px solid #ff6700;
          }
        }
        .pay-ali {
          background: url("/images/pay/icon-ali.png") no-repeat center;
          background-size: 103px 38px;
          margin-top: 19px;
        }
        .pay-wechat {
          background: url("/images/pay/icon-wechat.png") no-repeat center;
          background-size: 103px 38px;
        }
      }
    }
  }
}
</style>