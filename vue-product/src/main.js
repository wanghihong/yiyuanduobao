// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from 'mint-ui'
import axios from 'axios'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(MintUi)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
