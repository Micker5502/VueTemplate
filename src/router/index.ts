import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Account/CallBack',
    name: 'CallBack',
    meta:{
      layout:'redirect'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/CallBack.vue')
  },
  {
    path: '/Account/SilentRenew',
    name: 'SilentRenew',
    meta:{
      layout:'redirect'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/SilentRenew.vue')
  },
  {
    path: '/Account/SignInCheck',
    name: 'SignInCheck',
    meta:{
      layout:'redirect'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/SignInCheck.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
