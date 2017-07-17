import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import pageIntro from '../components/pageIntro'
import pageBuy from '../components/pageBuy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/buy',
      name: 'buy',
      component: pageBuy
    }
  ]
})
