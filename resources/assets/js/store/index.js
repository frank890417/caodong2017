import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import Axios from 'axios'
import fullpage from 'fullpage.js'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollTop: 0,
    navOpen: false,
    user: window.user,
    news: [
      {
        date: "2017.01.22",
        title: "記錄對於土地對於人情世俗的觀感",
        content: "最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。<br><br>最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。"
      },{
        date: "2017.03.26",
        title: "節奏遊走在雀躍的D i s co B e a ts",
        content: "最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。<br><br>最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。"
      },{
        date: "2017.05.25",
        title: "帶有油漬味道的重破音大拍",
        content: "最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。<br><br>最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。"
      },{
        date: "2017.01.22",
        title: "記錄對於土地對於人情世俗的觀感",
        content: "最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。<br><br>最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。"
      },{
        date: "2017.03.26",
        title: "節奏遊走在雀躍的D i s co B e a ts",
        content: "最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。<br><br>最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。"
      },{
        date: "2017.05.25",
        title: "帶有油漬味道的重破音大拍之間",
        content: "最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。<br><br>最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。"
      },{
        date: "2017.01.22",
        title: "記錄對於土地對於人情世俗的觀感<Br><br>節奏遊走在雀躍的D i s c",
        content: "最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。<br><br>最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。"
      },{
        date: "2017.03.26",
        title: "帶有油漬味道的重破音大拍之間",
        content: "最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。<br><br>最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。"
      },{
        date: "2017.05.25",
        title: "記錄對於土地對於人情世",
        content: "最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。<br><br>最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。"
      },{
        date: "2017.01.22",
        title: "記錄對於土地對於人情世俗的觀感<Br><br>節奏遊走在雀躍的D i s c",
        content: "最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。<br><br>最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。"
      },{
        date: "2017.03.26",
        title: "帶有油漬味道的重破音大拍之間",
        content: "最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。<br><br>最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。"
      },{
        date: "2017.05.25",
        title: "記錄對於土地對於人情世",
        content: "最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。<br><br>最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。最早開始時的團名為「草東街派對」，由幾位玩團又喜歡去草東街及山上晃的年輕人組成。團名來源「草東街」是位於臺北陽明山的街道名。其後，經歷一些成長過程中必經的難題和無奈的人事更動後，留下的團員決定以「草東沒有派對」這個團名繼續音樂旅程，而這亦是整個樂團風格發展的轉捩點。"
      },
    ],
    cart: [

    ],
    memberPanelOpened: false,
    user: null,
    nowBlock: "",
    mobile: false
  },
  mutations: {
    set_scrollTop(state,value){
      state.scrollTop=value;
    },
    set_nowBlock(state,value){
      state.nowBlock=value;
    },
    scrollTo(state,target){
      $("html,body").animate({scrollTop: $(target).offset().top+2},1000)
    },
    add_buy_item(state,item){
      state.cart.push(item)
    },
    remove_buy_item(state,item){
      state.cart=state.cart.filter(o=>o.title!=item.title)
    },
    toggleMemberPanel(state){
      state.memberPanelOpened = !state.memberPanelOpened
    },
    setMobile(state,value){
      state.mobile=value
    },
    toggleNavOpen(state,value){
      state.navOpen=!state.navOpen
    }

  },
  actions: {
    checkOut(context){
      // localStorage.cart = JSON.stringify(this.cart)
      if (context.state.cart.length>0){
        axios.post("/checkout",{cart: context.state.cart}).then((res)=>{
          console.log(res.data)
          window.document.write(res.data);
        })
      }else{
        alert("您的購物車裡沒有任何商品：） 請參考...")
      }
    }
  }
})

