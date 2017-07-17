<template lang="jade">
.userPanel
  transition(name="fade")
    .fullPagePanel(v-show="memberPanelOpened")
      .panelBody
        h3 會員專區
        h5 墨雨設計 會員您好。
        ul.navs
          li.nav 
            img.icon(src="/img/元件/ICON/ICON-13.png", alt="")
            span 登出
          li.nav  
            img.icon(src="/img/元件/ICON/ICON-45.png", alt="")
            span 購物車
          li.nav  
            img.icon(src="/img/元件/ICON/ICON-33.png", alt="")
            span 資料修改
          li.nav  
            img.icon(src="/img/元件/ICON/ICON-36.png", alt="")
            span 訂單查詢
        .navFixed
        .subPanel
          h4 購物車
          ul.buyCart
            li.buyItem(v-for="(item,itemId) in cart")
              .name {{itemId+1}}. {{item.title}}
              
              .price 
                span.textPrice {{item.price}}元
                span.textCount x{{item.count?item.count:1}}
            li.buyItem.total
              .name 總計
              .price {{totalPrice}}元
          .btn(@click="checkOut") 結帳
        
  .fixedBtns
    .btnMember(@click="toggleMemberPanel") 會員專區
    .btnCheckOut(@click="toggleMemberPanel") [{{cart.length}}] 結帳
      
</template>

<script>
import {mapState , mapMutations , mapActions} from 'vuex'
import $ from 'jquery'
import _ from 'lodash'
export default {
  data () {
    return {
      indexHeight: -1
    }
  },
  methods: {
    ...mapMutations(['scrollTo','toggleMemberPanel']),
    ...mapActions(['checkOut'])
  },
  mounted(){
    this.indexHeight=$(".pageIndex").outerHeight()
  },
  computed:{
    ...mapState(['scrollTop','cart','memberPanelOpened']),
    totalPrice(){
      return _.sumBy(this.cart,'price');
    }
  }
}
</script>
