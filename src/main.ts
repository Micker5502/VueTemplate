import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Select } from 'element-ui'
import service from "./utils/api/https"
import urls from "./utils/api/urls"
import accountEngine from './utils/function/accountEngine'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)

Vue.prototype.$https = service
Vue.prototype.$urls  = urls
Vue.prototype.$accountEngine = accountEngine

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
