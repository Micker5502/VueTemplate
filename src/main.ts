import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from "./utils/api/https"
import urls from "./utils/api/urls"
import DefaultLayout from './layout/default.vue'
import DefaultRedirect from './layout/redirect.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.component('default-layout',DefaultLayout)
Vue.component('redirect-layout',DefaultRedirect)
Vue.use(Vuetify)

Vue.config.productionTip = false


Vue.prototype.$https = service
Vue.prototype.$urls  = urls

new Vue({
  vuetify : new Vuetify(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
