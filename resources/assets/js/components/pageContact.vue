<template lang="jade">
.page.pageContact
  .back_img
    .left_img(:style="{transform: `translateY(${(scrollTop-blockY)/3}px)`}")
      .tile
    h4.copyright Copyright 2017 © 草東沒有派對 No Party For Cao Dong, All right reserved.

  .agent
    p.agent_info 
      h3 ROGE<br>[Booking Agent］
      p LINE ID CaoDong_Official<br>WeChat ID CaoDong_Official<br>nopartyforcaodong@gmail.com
  a.platform(v-for="platform in platforms",
    :style="platform_css(platform)",
    :href="platform.link",
    target="_blank")
    img(:src="'/img/07_CONTACT/連結/'+platform.name+'.png'",)
  

</template>

<script>
import $ from 'jquery'
import {mapState} from 'vuex'

var platforms= [
        {
          name: "Bandcamp", 
          pos: {left: 74,top: 52},
          link: "https://nopartyforcaodong.bandcamp.com/releases"
        },
        {
          name: "Bandsintown", 
          pos: {left: 57,top: 21},
          link: "http://bandsintown.com/草東沒有派對NoPartyForCaoDong"
        },
        {
          name: "Facebook", 
          pos: {left: 42,top: 32},
          link: "https://www.facebook.com/nopartyforcaodong/"
        },
        {
          name: "Ig", 
          pos: {left: 47,top: 54},
          link: "https://www.instagram.com/nopartyforcaodong/"
        },
        {
          name: "INDIEVOX", 
          pos: {left: 64,top: 36},
          link: "https://www.indievox.com/nopartyforcd"
        },
        {
          name: "ITUNES", 
          pos: {left: 68,top: 11},
          link: "https://itunes.apple.com/tw/artist/cao-dong-mei-you-pai-dui/id1110664089?l=zh"
        },
        {
          name: "MMT", 
          pos: {left: 78,top: 24},
          link: "https://www.mymusictaste.com/artist/NoPartyforCaoDong,436884/"
        },
        {
          name: "Spotify", 
          pos: {left: 62,top: 47},
          link: "https://open.spotify.com/artist/3HXSUfI76zVZk71UMAeVfp"
        },
        {
          name: "TWITTER", 
          pos: {left: 63,top: 61},
          link: "https://twitter.com/nopartyforcd"
        },
        {
          name: "Weibo", 
          pos: {left: 52,top: 41},
          link: "http://www.weibo.com/u/5697791666?refer_flag=1001030101_"
        },
        {
          name: "YOUTUBE", 
          pos: {left: 52,top: 12},
          link: "https://www.youtube.com/channel/UCYAyQjEhGHKARXnZe0U__9g"
        }
      ]

export default {
  name: 'pageContact',
  data () {
    return {
      platforms,
      blockY: -1
    }
  },
  methods: {
    platform_css(pl){
      return {
        left: pl.pos.left+'%',
        top: pl.pos.top+'%',
      }
    }
  },
  computed:{
    ...mapState(['scrollTop'])
  },
  mounted(){
    this.blockY=$(".pageContact").offset().top
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
</style>
