import { AxiosInstance } from 'axios';
import Vue from 'vue';
import VueRouter, { Route } from 'vue-router'
declare module 'vue/types/vue' {

  export interface Vue {
    $urls: any;
    $https: AxiosInstance;
    $router: VueRouter;
    $route: Route;
  }
}