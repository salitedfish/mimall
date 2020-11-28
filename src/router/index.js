import Vue from "vue"
import Router from "vue-router"

import Home from "../pages/home/home.vue"
import Index from "../pages/home/index.vue"
import Product from "../pages/home/product.vue"
import Detail from "../pages/home/detail.vue"
import Cart from "../pages/cart/cart.vue"
import Order from "../pages/order/order.vue"
import OrderComfirm from "../pages/order/orderComfirm.vue"
import OrderList from "../pages/order/orderList.vue"
import OrderPay from "../pages/order/orderPay.vue"
import Alipay from "../pages/order/alipay.vue"

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
        },
        {
          path: "/product/:id",
          name: "product",
          component: Product,
        },
        {
          path: "/detail/:id",
          name: "detail",
          component: Detail,
        }
      ]
    },
    {
      path: "/order",
      name: "order",
      component: Order,
      children: [
        {
          path: "comfirm",
          name: "ordercomfirm",
          component: OrderComfirm,
        },
        {
          path: "list",
          name: "orderlist",
          component: OrderList,
        },
        {
          path: "pay",
          name: "orderpay",
          component: OrderPay,
        },
        {
          path: "alipay",
          name: "alipay",
          component: Alipay
        }
      ]
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },

  ]


});