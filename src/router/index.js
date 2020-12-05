import Vue from "vue"
import Router from "vue-router"

import Home from "../pages/home/home.vue"
import Index from "../pages/home/index.vue"
import Product from "../pages/home/product.vue"
import Detail from "../pages/home/detail.vue"
import Cart from "../pages/cart/cart.vue"
import Order from "../pages/order/order.vue"
import OrderConfirm from "../pages/order/orderConfirm.vue"
import OrderList from "../pages/order/orderList.vue"
import OrderPay from "../pages/order/orderPay.vue"
import Alipay from "../pages/order/alipay.vue"
import Login from "../pages/login/login.vue"

Vue.use(Router);

export default new Router({
  routes:[
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/index",
      children:[
        {
          path:"/index",
          name: "index",
          component: Index,
          meta: {
            title: "小米商城"
          }
        },
        {
          path: "/product/:id",
          name: "product",
          component: Product,
          meta: {
            title: "产品详情"
          }
        },
        {
          path: "/detail/:id",
          name: "detail",
          component: Detail,
          meta: {
            title: "产品参数"
          }
        }
      ]
    },
    {
      path: "/order",
      name: "order",
      component: Order,
      children: [
        {
          path: "confirm",
          name: "orderconfirm",
          component: OrderConfirm,
          meta: {
            title: "订单确认"
          }
        },
        {
          path: "list",
          name: "orderlist",
          component: OrderList,
          meta: {
            title: "订单列表"
          }
        },
        {
          path: "pay",
          name: "orderpay",
          component: OrderPay,
          meta: {
            title: "订单支付"
          }
        },
        {
          path: "alipay",
          name: "alipay",
          component: Alipay,
          meta: {
            title: "阿里支付"
          }
        }
      ]
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      meta: {
        title: "购物车"
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "登录/注册"
      }
    }

  ]


});