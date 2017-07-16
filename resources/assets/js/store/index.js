import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import fullpage from 'fullpage.js'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollTop: 0,
    news: [
      {
        date: "2017.01.22",
        content: "記錄對於土地對於人情世俗的觀感<Br>節奏遊走在雀躍的D i s co B e a ts與帶有油漬味道的重破音大拍之間"
      },{
        date: "2017.03.26",
        content: "記錄對於土地對於人情世俗的觀感 節奏遊走在雀躍的D i s co B e a ts與帶有油漬味道的重破音大拍之間"
      },{
        date: "2017.05.25",
        content: "記錄對於土地對於人情世俗的觀感<Br>節奏遊走在雀躍的D i s co B e a ts與帶有油漬味道的重破音大拍之間"
      }
    ]
    
  },
  mutations: {
    set_scrollTop(state,value){
      state.scrollTop=value;
    },
    scrollTo(state,target){
      $("html,body").animate({scrollTop: $(target).offset().top+2},1000)
    }

  },
  actions: {
    
  }
})

