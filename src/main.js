import Vue from 'vue'
import 'normalize.css' // 保留标签自己的样式
import './assets/css/base.css'
import App from './App'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
