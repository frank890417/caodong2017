import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import _ from 'lodash'
import $ from 'jquery'
Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      alias: ['/intro','/news','/video','/works','/contact', '/shop' ,  '/tour'],
      name: 'App',
      component: App
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to.path)
  let targetEl = ".page"+_.startCase((to.path).split('/')[1]);
  let $targetEl = $(targetEl)
  if ( $targetEl .length>0){
    $("html,body").animate({scrollTop:  $targetEl .offset().top+2},1000)
  }
    next();
})
export default router