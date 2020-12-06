import Vue from "vue"
import Router from "vue-router"

import Home from "../pages/home/home.vue"
import Index from "../pages/home/index.vue"
// import Product from "../pages/home/product.vue"
// import Detail from "../pages/home/detail.vue"
// import Cart from "../pages/cart/cart.vue"
// import Order from "../pages/order/order.vue"
// import OrderConfirm from "../pages/order/orderConfirm.vue"
// import OrderList from "../pages/order/orderList.vue"
// import OrderPay from "../pages/order/orderPay.vue"
// import Alipay from "../pages/order/alipay.vue"
// import Login from "../pages/login/login.vue"

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
          component: ()=>import("../pages/home/product.vue"),
          meta: {
            title: "产品详情"
          }
        },
        {
          path: "/detail/:id",
          name: "detail",
          component: ()=>import("../pages/home/detail.vue"),
          meta: {
            title: "产品参数"
          }
        }
      ]
    },
    {
      path: "/order",
      name: "order",
      component: ()=>import("../pages/order/order.vue"),
      children: [
        {
          path: "confirm",
          name: "orderconfirm",
          component: ()=>import("../pages/order/orderConfirm.vue"),
          meta: {
            title: "订单确认"
          }
        },
        {
          path: "list",
          name: "orderlist",
          component: ()=>import("../pages/order/orderList.vue"),
          meta: {
            title: "订单列表"
          }
        },
        {
          path: "pay",
          name: "orderpay",
          component: ()=>import("../pages/order/orderPay.vue"),
          meta: {
            title: "订单支付"
          }
        },
        {
          path: "alipay",
          name: "alipay",
          component: ()=>import("../pages/order/alipay.vue"),
          meta: {
            title: "阿里支付"
          }
        }
      ]
    },
    {
      path: "/cart",
      name: "cart",
      component: ()=>import("../pages/cart/cart.vue"),
      meta: {
        title: "购物车"
      }
    },
    {
      path: "/login",
      name: "login",
      component: ()=>import("../pages/login/login.vue"),
      meta: {
        title: "登录/注册"
      }
    }

  ]


});