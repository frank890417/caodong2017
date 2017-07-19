<template lang="jade">
.page.pageWorks.section
  .back_img
    .left_img
      .tile
    .content
      .left.col_album
        .cover
          img.album_cover(alt="works",src="/img/03_WORKS/album.jpg")
          // .title 醜奴兒
          // .eng The Servile
        .tracks
          .track(v-for="(song,id) in songs",
                 :class="{active: playingId==id}",
                 @click="playingId=id")
            img(:src="'/img/03_WORKS/歌名/'+song.title+'.png'")
      .right.col_lyrics
        p(v-html="replaceBr(song.lyrics)",
          v-for="(song,id) in songs",
          v-show="id==playingId",
          :key="song.title")
        
        .btns
          div(@click = "addCart(song)", v-if="!cart.find(o=>o.title==song.title)") 
            img.icon(src="/img/元件/ICON/ICON-35.png", alt="")
            span 購買單曲
          div(@click = "addCart(song)", v-else) - 
            span 移除
          router-link(to="/shop") 
            img.icon(src="/img/元件/ICON/ICON-34.png", alt="") 
            span 更多商品


      
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
    ...mapMutations(['add_buy_item','checkout']),
    ...mapActions(['checkOut']),
    replaceBr(text){
      return text.replace(/(?:\r\n|\r|\n)/g,"<br>")
    }
  },
  data () {
    return {
      playingId: 1,
      songs: []
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
