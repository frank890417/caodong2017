<template lang="jade">
.page.pageWorks.section
  .back_img
    .left_img
      .tile
    .content
      .left.col_album
        .cover
          img.album_cover(alt="works",src="/img/03_WORKS/album.jpg")
          .title 醜奴兒
          .eng The Servile
        .tracks
          .track(v-for="(song,id) in songs",
                 :class="{active: playingId==id}",
                 @click="playingId=id")
            img(:src="'/img/03_WORKS/歌名/'+song.title+'.png'")
            span(@click = "addCart(song)", v-if="!cart.find(o=>o.title==song.title)") + 購買
            span(@click = "addCart(song)", v-else) - 移除
      transition-group.right.col_lyrics(
        tag="div", 
        name="fade",
        mode="out-in")
        p(v-html="replaceBr(song.lyrics)",
          v-for="(song,id) in songs",
          v-show="id==playingId",
          :key="song.title")
  

      
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
@import "../../sass/_variables.sass"

.pageWorks
  overflow: hidden
  +flex_center
  align-items: flex-end
  background-attachment: fixed
  text-align: left
  line-height: 40px
  li

    display: flex
    .date
      width: 110px

.back_img
  width: 80%
  height: 100vh
  // border-radius: 120px 120px 0px 0px
  // background: url("/img/03_WORKS/UP_00.jpg")
  background-size: cover
  background-position: center bottom
  background-attachment: fixed
  display: flex
  position: absolute

  
  .left_img
    height: 100vh
    // border-radius: 120px 120px 0px 0px
    background: url("/img/03_WORKS/DOWN_00.jpg")
    background-size: 1500px auto
    background-position: center center  
    overflow: hidden




.content
  display: flex
  width: 84%
  align-items: flex-end
  .left
    width: 30%
  .right
    box-sizing: border-box
    width: 70%
    padding-left: 5%


.about_text
  height: 50px
  display: block
  margin-bottom: 20px
  
.right_1
  width: 50%
.right_2
  width: 40%
  margin-top: 30vmin

.col_album
  display: flex
  flex-direction: column

  align-items: center


.album_cover
  width: 200px

.track
  opacity: 0.55
  cursor: pointer
  +trans
  img
    height: 30px
  &.active
    opacity: 1
  
</style>
