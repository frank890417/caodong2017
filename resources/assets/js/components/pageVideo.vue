<template lang="jade">
.page.pageVideo.section
  .back_img
    .left_img
      .tile
    .content
      h2.pageTitle 影音
      .col_video_selector
        .item(v-for="(v,vid) in videos",
              :style="{'background-image': 'url('+v.cover+')'}",
              :class="{empty: v.title==''}",
              @click="setPlayVideo(vid)")
          .hoverForm  
          .infos
            h2 {{v.title}}
      video_fullplayer(:youtube_url="videos[playingId].url",
                       :status="video_playing",
                       @ended="video_playing=false")
      //.video_nav
        img.tag(src="/img/03_WORKS/歌名/山海.png")
        img.tag(src="/img/03_WORKS/歌名/山海.png")
        img.tag(src="/img/03_WORKS/歌名/山海.png")
      //iframe(width="100%" height="700" src="https://www.youtube.com/embed/j2311FZWoFQ?rel=0" frameborder="0" allowfullscreen,
               :style="{transform:  `translateY(${(scrollTop-blockY)/(6) }px)`}")
      
</template>

<script>
import video_fullplayer from './video_fullplayer'
import $ from 'jquery'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      blockY: -1,
      video_playing: false,
      playingId: 0,
      videos: [
        {
          title: "山海",
          cover: "http://img.youtube.com/vi/j2311FZWoFQ/0.jpg",
          url: "https://www.youtube.com/embed/j2311FZWoFQ?rel=0"
        },
        {
          title: "",
          cover: "",
          url: ""
        },{
          title: "",
          cover: "",
          url: ""
        },{
          title: "",
          cover: "",
          url: ""
        },{
          title: "",
          cover: "",
          url: ""
        },{
          title: "",
          cover: "",
          url: ""
        },{
          title: "",
          cover: "",
          url: ""
        },{
          title: "",
          cover: "",
          url: ""
        }
      ]
    }
  },
  computed:{
    ...mapState(['scrollTop','news'])
  },
  mounted(){
    this.blockY=$(".pageVideo").offset().top
  },
  components: {
    video_fullplayer
  },
  methods: {
    setPlayVideo(vid){
      if (this.videos[vid].url){
        this.video_playing=true;
        this.playingId=vid;
      }
    }
  }
}
</script>
<style scoped lang="sass">


  
</style>
