<template lang="jade">
.page.pageShop.section
  .back_img
    .left_img
      .tile
    .content
      .col_shop
        .item(v-for="item in items.slice(0,8)",
              :style="{'background-image': 'url('+item.cover+')'}")
          .infos
            .title {{item.title}}
            .price {{item.price}} NTD.
          .hoverForm.flexColumn
            .formClothSize.flexRow
              .btn XS
              .btn S
              .btn M
              .btn L
              .btn XL
            .formAmount.flexRow
              .btn(style="width: 20px") - 
              .amount 0
              .btn(style="width: 20px") +
              
            .btn(@click = "addCart(item)", v-if="!cart.find(o=>o.title==item.title)")
              img.icon(src="/img/元件/ICON/ICON-35.png", alt="" ,title="點擊加入購物車")
              span 購買
            .btn(@click = "addCart(item)", v-else) - 移除
      .userControl
        ul.nav_paging
          li.btnFirst <<
          li.btnBefore <
          li.btnAfter >
          li.btnLast >>
        .control
          .btnBuycart(@click='toggleMemberPanel')
            span 購物車
          .btnDetail
            span 購買須知
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import Axios from 'axios'
import $ from 'jquery'
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
    ...mapMutations(['add_buy_item','checkout','toggleMemberPanel']),
    ...mapActions(['checkOut']),
    replaceBr(text){
      return text.replace(/(?:\r\n|\r|\n)/g,"<br>")
    }
  },
  data () {
    return {
      items: [
        {
          title: "醜奴兒 專輯(實體)",
          price: 400,
          cover: "/img/06_SHOP/t-shirt.png"
        },{
          title: "紀念 T-SHIRT",
          price: 500,
          option: ['S','M','L','XL','XXL'],
          cover: "/img/06_SHOP/t-shirt.png"
        },{
          title: "開瓶器",
          price: 50,
          cover: "/img/06_SHOP/t-shirt.png"
        },{
          title: "紀念 TEST",
          price: 500
        },{
          title: "紀念 TEST",
          price: 500
        },{
          title: "紀念 TEST",
          price: 500
        },{
          title: "紀念 TEST",
          price: 500
        },{
          title: "紀念 TEST",
          price: 500
        }
      ]
    }
  },
  computed:{
    ...mapState(['scrollTop','news','cart'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

    
  </style>
