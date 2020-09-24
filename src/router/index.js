import Vue from 'vue'
import VueRouter from 'vue-router'
// 主页面
import Index from '../views/Index.vue'
// 登陆页面
// import Login from '../views/Login.vue'
// 注册司机审核
import Examine from '../views/Examine.vue'
import first from '../components/examine/first.vue'
import second from '../components/examine/second.vue'
import third from '../components/examine/third.vue'
import fourth from '../components/examine/fourth.vue'
// 成为司机后任务页面
import newtask from '../components/index/newtask/newtask.vue'
// 订单页面
import allorder from '../components/index/orderlist/allorder.vue'
// import giveorder from '../components/index/orderlist/giveorder.vue'
// import stillorder from '../components/index/orderlist/stillorder.vue'
// 个人中心
import owninfo from '../components/index/owninfo/owninfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 输入错误路由重定向到登陆页面
    path: '*',
    redirect: '/index/owninfo'
  },/*  {
    // 登录页面路由
    // path: '/login',
    // name: 'Login',
    // component: Login
  }, */ {
    // 首页路由
    path: '/index',
    component:Index,
    redirect:'/index/owninfo',
    children: [
      {
        // 任务页面路由
        path: '/index/newtask',
        name: 'newtask',
        component: newtask
      }
      ,
      {
        // 订单页面路由
        path: '/index/order',
        name: 'order',
        component: allorder
      },
      {
        path: '/index/owninfo',
        name: 'owninfo',
        component: owninfo
      }
    ]
  }, {
    path: '/examine',
    name: 'Examine',
    component: Examine,
    redirect: '/examine/first',
    children: [
      {
        path: '/examine/first',
        name: 'first',
        component: first
      }, {
        path: '/examine/second',
        name: 'second',
        component: second
      }, {
        path: '/examine/third',
        name: 'third',
        component: third
      }, {
        path: '/examine/fourth',
        name: 'fourth',
        component: fourth
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
