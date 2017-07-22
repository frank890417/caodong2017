
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Rx from 'rxjs/Rx'
// import './assets/sass/_variables.sass'
import $ from 'jquery'

// Vue.config.productionTip = false

// wheelDelta
const mousewheel = Rx.Observable.fromEvent(document, 'mousewheel')
                              .map(e => e.wheelDelta);
var lockScroll=true
var scrolling=false
var direction = 'up'
if (lockScroll && $(window).outerHeight() > 800 &&  $(window).outerWidth()  > 1000){
  console.log('enable snap');
  // filter delta which bigger than thereshold and filter out twice down/up condition
  const sourcePageNav = mousewheel.filter(
    delta => ((delta > 50 && (direction == 'down' || !scrolling))
         || (delta <= -50 && !scrolling && (direction == 'up' || !scrolling)))
  )
  .map(delta => (delta > 0 ? 'up' : 'down'))                // map delta to up or down
  .throttleTime(500);                               // filter event by 200ms time span

  sourcePageNav.subscribe((direct) => {
    let now_top=$(window).scrollTop()
    let flag=false
    let flag2=false
    direction = direct
    let $lastlastblock=null
    let $lastblock=null
    let $preblock=null
    let $postblock=null

    $(".page").each((id,obj)=>{
      if (now_top<$(obj).offset().top){
        if (!flag){
          $preblock=$lastlastblock
          $postblock=$(obj)
          flag=true
          scrolling=true
        }
      }
      $lastlastblock=$lastblock
      $lastblock=$(obj)
    })  

    if ($preblock && direct=='up'){
      
      // let preClass = $preblock.attr("class").split(' ').find((o)=>o.indexOf("page")!=-1 && o!="page"  )
      // router.push("/"+preClass.split("page")[1].toLowerCase())
      $("html,body").animate({scrollTop:  $preblock .offset().top+2},1000)
      setTimeout(()=>scrolling=false,400)
    }
    if ($postblock && direct=='down'){
      
      $("html,body").animate({scrollTop: $postblock.offset().top } ,1000)
      // let postClass = $preblock.attr("class").split(' ').find((o)=>o.indexOf("page")!=-1 && o!="page"  )
      // router.push("/"+postClass.split("page")[1].toLowerCase())
      setTimeout(()=>scrolling=false,400)
    }
    

  })
}
var windowHeight = $(window).outerHeight()
// $(window).bind('mousewheel', (event) => {
//   // if ( windowHeight > 850) {
//     event.preventDefault();
//   // }
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  components: { App },
  mounted(){
    window.onscroll = (evt) => {
      store.commit('set_scrollTop', window.scrollY);
      if (window.update_scroll) { window.update_scroll(window.scrollY); }
      
      var result=""
      $(".page").each((id,obj)=>{
        if (window.scrollY > $(obj).offset().top - 150){
          result = Array.from(obj.classList).find(o=>o.indexOf('page')!=-1 && o!="page");
        }
      })  
      console.log('now block:',result)
      store.commit('set_nowBlock', result);
    };
  },
  computed: {
    
  }
})
