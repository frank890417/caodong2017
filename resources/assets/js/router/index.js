import Vue from 'vue'
import Router from 'vue-router'
import pageIndex from '../components/pageIndex'
import pageIntro from '../components/pageIntro'
import pageBuy from '../components/pageBuy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageIndex',
      component: pageIndex
    },
    {
      path: '/buy',
      name: 'buy',
      component: pageBuy
    }
  ]
})
