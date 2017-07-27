<template lang="jade">
.page.pageShop.section
  .back_img
    .left_img
      .tile
    .content
      .col_shop
        .item(v-for="(item,itemId) in items.slice(0,8)",
              :style="{'background-image': 'url('+item.cover+')'}",
              :class="{empty: item.title==''}")
          .infos
            .price {{item.price}} NTD.
            .title {{item.title}}
          .hoverForm.flexColumn
            .formClothSize.flexRow(v-if="item.type=='t-shirt'")
              .btn XS
              .btn S
              .btn M
              .btn L
              .btn XL
            .formAmount.flexRow
              .btn(style="width: 20px", @click="deltaItemCount(item,-1)") - 
              .amount {{item.count}}
              .btn(style="width: 20px", @click="deltaItemCount(item,1)") +
              
            .btn(@click = "addCart(item)", v-if="!cart.find(o=>o.title==item.title)")
              img.icon(src="/img/元件/ICON/ICON-35.png", alt="" ,title="點擊加入購物車")
              span 購買
            .btn(@click = "remove_buy_item(item)", v-else)
              img.icon(src="/img/元件/ICON/ICON-27.png", alt="" ,title="移除物品")
              span 移除
      .userControl
        ul.nav_paging
          li.btnFirst <<
          li.btnBefore <
          li.btnAfter >
          li.btnLast >>
        .control
          .btnBuycart(@click='toggleMemberPanel')
            span 購物車
          .btnDetail(@click="InformOpen=true")
            span 購買須知
  
  fullPage(:status="InformOpen",
            @ended="InformOpen=false")
    .fullInformContainer
      .fullContent
        h2 購買須知
        hr
        p 銷售地區：<br>
          | 支援國際運送，買家可以信用卡或PAYPAL付款，可選適合您的送貨方式，並可按右上角幣值按鈕選取當地幣值作參考價格。<br>
          | <br>
          | 購買流程：<br>
          | 1.把選購貨物加入購物車，並按「訂單結賬」下單。<br>
          | 2.清晰填寫個人資料，並重覆核對清楚。<br>
          | 3.按「前往結賬」完成下單，該頁會顯示訂單資料及入數賬戶資料。<br>
          | 4.同時，您的郵箱會收到下單通知書，同樣會顯示訂單資料及入數賬戶資料，並有「訂單連結」的按鈕。<br>
          | 5.入數後，按郵件中的「訂單連結」，並透過「店主和顧客訂單通訊」把入賬通知書傳給本店。<br>
          | 6.48小時內會收到付款狀態轉為「已付款」的郵件，這代表本店已收到您的款項。<br>
          | 7.耐心等候發貨，發貨後，會收到發貨郵件通知。<br>
          | 8.等候收取郵包，平郵一般需時1－4天。<br>
          | <br>
          | 付款方式(綠界科技)：<br>
          | 銀行轉帳 : 本店提供恆生銀行和中國(香港)銀行帳號轉帳，帳戶編號會在下單時顯示。<br>
          | 信用卡：支援VISA、MASTER、AE信用卡付款，需支付3.9%服務費<br>
          | PAYPAL：可連結PAYPAL付款，需支付3.9%服務費
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import Axios from 'axios'
import $ from 'jquery'
import fullPage from './fullPage'
export default {
  mounted() {
    console.log('page_works mounted.')
    Axios.get("/api/album/醜奴兒/songs").then((res)=>{
      console.log(res.data)
      this.songs=res.data
    })
  },
  methods: {
    addCart(obj){
      if (!this.cart.find(o=>o.title==obj.title) ){
        this.add_buy_item(obj)
      }
    },
    ...mapMutations(['add_buy_item','checkout','toggleMemberPanel','remove_buy_item']),
    ...mapActions(['checkOut']),
    replaceBr(text){
      return text.replace(/(?:\r\n|\r|\n)/g,"<br>")
    },
    deltaItemCount(item,d){
      if (!item.count){
        Vue.set(item,"count",0)
      }
      var nowValue=item.count
      if (nowValue+d>0 && d<0){
        item.count+=d
      }  
      if (nowValue+d<this.items.length-1 && d>0){
        item.count+=d
      }     
    }
  },
  data () {
    return {
      InformOpen: false,
      items: [
        {
          title: "醜奴兒 專輯(實體)",
          price: 400,
          cover: "/img/06_SHOP/t-shirt.png",
          type: "other"
        },{
          title: "紀念 T-SHIRT",
          price: 500,
          option: ['S','M','L','XL','XXL'],
          cover: "/img/06_SHOP/t-shirt.png",
          type: "t-shirt"
        },{
          title: "開瓶器",
          price: 50,
          cover: "/img/06_SHOP/t-shirt.png",
          type: "other"
        },{
          title: "",
          price: 0
        },{
          title: "",
          price: 0
        },{
          title: "",
          price: 0
        },{
          title: "",
          price: 0
        },{
          title: "",
          price: 0
        }
      ]
    }
  },
  components: {
    fullPage
  },
  computed:{
    ...mapState(['scrollTop','news','cart'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

    
  </style>
