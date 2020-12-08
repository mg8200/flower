import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../components/page/home/home.vue"),
  },
  {
    path: '/information',
    name: 'information',
    component: () => import("../components/page/information/information.vue"),
    children: [{
      path: 'details/:catid/:name',
      name: 'informationDetails',
      component: () => import("../components/page/information/informationList.vue"),
    }]
  },
  {
    path: '/information/details/informationDetail/:infoId',
    name: 'informationDetail',
    component: () => import("../components/page/information/informationDetail.vue"),
  },
  {
    path: '/shoppingCar',
    name: 'shoppingCar',
    component: () => import("../components/page/shoppingCar/shoppingCar.vue"),
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import("../components/page/mine/mine.vue"),
  },
  {
    path: '/mine/shippingAddress',
    name: 'shippingAddress',
    component: () => import("../components/page/address/shippingAddress.vue"),
  },
  {
    path: '/mine/modifyAddress/:id',
    name: 'modifyAddress',
    component: () => import("../components/page/address/modifyAddress.vue"),
  },
  {
    path: '/mine/addAddress',
    name: 'addAddress',
    component: () => import("../components/page/address/addAddress.vue"),
  },


  {
    path: '/goodsDetailsList/:good_type',
    name: 'goodsDetailsList',
    component: () => import("../components/page/goods/goodsDetailsList.vue"),
  },
  {
    path: '/goodsDetails/:good_id',
    name: 'goodsDetails',
    component: () => import("../components/page/goods/goodsDetails/index.vue"),
  },
  {
    path: '/quick-select/:sid',
    name: 'quick-select',
    component: () => import("../components/page/goods/quickSelect.vue"),
  },

  {
    path: '/search',
    name: 'search',
    component: () => import("../components/page/search/search.vue"),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../components/page/user/login.vue"),
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import("../components/page/user/reg.vue"),
  },
  {
    path: '/order/fillOrder',
    name: 'fillOrder',
    component: () => import("../components/page/order/fillOrder.vue"),
  },
]



const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  if (to.name == "shippingAddress" || to.name == "addAddress" || to.name == "modifyAddress") {
    if (token) {
      next()
    } else {
      next({
        name: "login"
      })
    }
  } else {
    next()
  }


})

export default router