// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



import Vue from 'vue'
import App from './App'


//全局的配置
import './modules/config'
import router from './router'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
//路由切换时 置顶滚动条
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})