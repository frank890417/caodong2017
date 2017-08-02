<template lang="jade">
.page.pageWorks.section
  .back_img
    .left_img
      .tile
    .content(v-if="nowAlbum")
      .left.col_album
        .cover
          .cover_container
            img.album_cover(alt="works",src="/img/03_WORKS/album.jpg")
            img.icon.btn_left(src="/img/元件/ICON/ICON-01.png" ,
                              title="上一張專輯",
                              @click="now_album_id++", 
                              v-if="now_album_id>0")
            img.icon.btn_right(src="/img/元件/ICON/ICON-02.png" ,
                              title="下一張專輯",
                              @click="now_album_id--", 
                              v-if="now_album_id<albums.count-1")
            .cover_info
              .title {{nowAlbum.title}}
              .eng {{nowAlbum.eng}} 
              div(@click = "addCart(nowAlbum)", v-if="!cart.find(o=>o.title==nowAlbum.title)") 
                img.icon(src="/img/元件/ICON/ICON-35.png", alt="")
                span 購買專輯
              div(@click = "remove_buy_item(nowAlbum)", v-else) - 
                img.icon(src="/img/元件/ICON/ICON-27.png", alt="")
                | 移除專輯

          .phoneTab(v-if="mobile")
            .btn(@click="phonePage='tracks'",
                 :class="{active: phonePage=='tracks'}") 曲目
            .btn(@click="phonePage='lyrics'",
                 :class="{active: phonePage=='lyrics'}") 歌詞
               
          //, v-if="now_album_id>0"
          .tracks(v-if="(mobile && phonePage=='tracks') || !mobile")
            .track(v-for="(song,id) in nowAlbum.songs",
                  :class="{active: playingId==id}",
                  @click="playingId=id")
              img(:src="'/img/03_WORKS/歌名/'+song.title+'.png'")
          
      .right.col_lyrics
        transition-group(name="fade-delay",
                         mode="out-in",
                         v-if="(mobile && phonePage=='lyrics') || !mobile")
          p.lyrics(v-html="replaceBr(song.lyrics)",
            v-for="(song,id) in nowAlbum.songs",
            v-show="id==playingId",
            :key="song.title")
          
        .btns
          //pre {{song}}
          //h2 {{song.preview}}
          //audio.trackPreview(:src="nowAlbum.songs[playingId].preview" controls)
          audioPlayer.trackPreview(:sources="[previewUrl]",
                                   :autoplay='false')
          div.btnBuy(@click = "addCart(nowAlbum.songs[playingId])", v-if="!cart.find(o=>o.title==nowAlbum.songs[playingId].title)") 
            img.icon(src="/img/元件/ICON/ICON-35.png", alt="")
            | 購買單曲
          div.btnBuy(@click = "remove_buy_item(nowAlbum.songs[playingId])", v-else)
            img.icon(src="/img/元件/ICON/ICON-27.png", alt="")
            | 移除單曲
          router-link(to="/shop") 
            img.icon(src="/img/元件/ICON/ICON-34.png", alt="") 
            | 更多商品


      
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import Axios from 'axios'
import $ from 'jquery'
import audioPlayer from './audioPlayer'
export default {
  mounted() {
    console.log('page_works mounted.')
    Axios.get("/api/albums").then((res)=>{
      this.albums=res.data
      this.albums.forEach( (obj)=>{
        Axios.get(`/api/album/${obj.title}/songs`).then((res)=>{
          // console.log(res.data)
          Vue.set(obj,"songs",res.data)
          // obj.songs=res.data
        })
      } )
      
    })
    
  },
  methods: {
    ...mapMutations(['toggleMemberPanel','add_buy_item','checkout','remove_buy_item']),
    addCart(obj){
      if (!this.cart.find(o=>o.title==obj.title) ){
        this.add_buy_item(obj)
      }
    },
    ...mapActions(['checkOut']),
    replaceBr(text){
      return text.replace(/(?:\r\n|\r|\n)/g,"<br>")
    }
  },
  data () {
    return {
      playingId: 1,
      albums: [
      ],
      now_album_id: 0,
      phonePage: "tracks"

      
    }
  },
  computed:{
    ...mapState(['scrollTop','news','cart','mobile']),
    nowAlbum(){
      return this.albums[this.now_album_id]
    },
    previewUrl(){
      return this.nowAlbum.songs[this.playingId].preview
    }
  },
  watch: {
    playingId(){
      Vue.nextTick(()=>{
        $("audio.trackPreview")[0].play()
      })
    }
  },
  components: {
    audioPlayer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

    
</style>
