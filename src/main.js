// 页面配置
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* 引入vue文件 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueResource from 'vue-resource'
/* 引入同目录下的App.vue模块 */
// import Login from '@/views/login/login'
// import Blog from '@/components/blog'
import main from '@/views/main/main'
import sildeBar from '@/views/main/sideBar'
import startup from '@/views/startup/startup'
import player from '@/views/player/player'
/* 引入vue的路由 */
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
// 将axios添加到Vue原型上后就不需要在每个需要使用它的页面引用了
Vue.prototype.$http = axios

const routes = [
  { path: '/startup', component: startup },
  { path: '/', component: main },
  { path: '/player', component: player }
]

const router = new VueRouter({
  /* linkActiveClass: 'active', */
  routes
})

/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  components: { startup },
  template: '<startup/>'
}) */
new Vue({
  router: router,
  render: h => h(sildeBar)
}).$mount('#app')
