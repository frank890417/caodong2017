<template lang='jade'>
.pageBuy
  ul.buylist
    li(v-for="song in songs") 
      span {{song.title}} ({{song.price}}TWD)
      button(@click = "addCart(song)", v-if="!cart.find(o=>o.title==song.title)") Add to Cart
      button(@click = "addCart(song)", v-else) Added
  hr
  ul.cart
    li(v-for="item in cart")
      span {{item.title}}
  h4 共 {{totalPrice}} 元
  button(@click="checkOut") 結帳
  
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import Axios from 'axios'
import $ from 'jquery'
export default {
    mounted() {
        console.log('page_buy mounted.')
        Axios.get("/api/album/醜奴兒/songs").then((res)=>{
          console.log(res.data)
          this.songs=res.data
        })
    },
    data(){
      return {
        songs: [],
      }
    },
    methods: {
      addCart(obj){
        if (!this.cart.find(o=>o.title==obj.title) ){
          this.add_buy_item(obj)
        }
      },
      ...mapMutations(['add_buy_item','checkout']),
      ...mapActions(['checkOut'])
    },
    computed:{
      ...mapState(["cart"]),
      totalPrice(){
        return this.cart.map(o=>o.price).reduce((a,b)=>(a+b),0)
      }
    }
}

</script>

<style lang="sass" scoped>
  .pageBuy,*
    background-color: white
    color: black

</style>