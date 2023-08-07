import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Login from '@/views/login'
import Home from '@/views/home'
// 异步加载的方式
const Product = () => import('@/views/product/index.vue')
const List = () => import('@/views/product/list/index.vue')
const Category = () => import('@/views/product/category/index.vue')
const Order = () => import('@/views/order/index.vue')
const OrderList = () => import('@/views/order/list/index.vue')
const OrderCollect = () => import('@/views/order/collect/index.vue')
const Addvert = () => import('@/views/advert/index.vue')
const AddverList = () => import('@/views/advert/list/index.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    // 二级路由
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/product',
        name: 'product',
        component: Product,
        children: [
          {
            path: 'list', // 访问路径：/product/list
            name: 'list',
            component: List
          },
          {
            path: 'category', // 访问路径：/product/list
            name: 'category',
            component: Category
          },
        ]
      },
      {
        path: '/order',
        name: 'order',
        component: Order,
        children: [
          {
            path: 'order-list', // 访问路径：/product/list
            name: 'order-list',
            component: OrderList
          },
          {
            path: 'order-collect', // 访问路径：/product/list
            name: 'order-collect',
            component: OrderCollect
          },
        ]
      },
      {
        path: '/advert',
        name: 'advert',
        component: Addvert,
        children: [
          {
            path: 'advert-list', // 访问路径：/product/list
            name: 'advert-list',
            component: AddverList
          },
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
