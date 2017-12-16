// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import imgUrl from '@/common/filters/imgUrl'

Vue.config.productionTip = false

// 全局注册过滤器
Vue.filter('imgUrl', imgUrl)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
