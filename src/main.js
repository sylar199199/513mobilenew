import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Lazyload } from 'vant';
Vue.use(Lazyload)

import { imgUrl } from '@/utils/img-path/index.js'
Vue.prototype.$imgUrl = imgUrl

import './assets/less/global.less';
import './assets/css/reset.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
