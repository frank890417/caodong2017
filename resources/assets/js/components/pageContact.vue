<template lang="jade">
.page.pageContact
  .back_img
    .left_img
      .tile
    h4.copyright Copyright 2017 © 草東沒有派對 No Party For Cao Dong, All right reserved.
    
    //平台文字連結
    .platforms
      a.platform(v-for="platform in platforms",
        :style="platform_css(platform)",
        :href="platform.link",
        target="_blank",
        :title="'點擊前往'+platform.name")
        img(:src="'/img/07_CONTACT/連結/'+platform.name+'.png'",)
  
  //agent資訊
  .agent
    p.agent_info 
      h3 ROGE<br>[Booking Agent］
      .row
        span.pull-left LINE ID
        span.pull-right CaoDong_Official
      .row
        span.pull-left WeChat ID
        span.pull-right CaoDong_Official
      .row
        p nopartyforcaodong@gmail.com
  
</template>

<script>
import $ from 'jquery'
import {mapState} from 'vuex'

var platforms= [
        {
          name: "YOUTUBE", 
          link: "https://www.youtube.com/channel/UCYAyQjEhGHKARXnZe0U__9g"
        },
        {
          name: "Bandcamp", 
          link: "https://nopartyforcaodong.bandcamp.com/releases"
        },
        {
          name: "Bandsintown", 
          link: "http://bandsintown.com/草東沒有派對NoPartyForCaoDong"
        },
        {
          name: "Facebook", 
          link: "https://www.facebook.com/nopartyforcaodong/"
        },
        {
          name: "Ig", 
          link: "https://www.instagram.com/nopartyforcaodong/"
        },
        {
          name: "INDIEVOX", 
          link: "https://www.indievox.com/nopartyforcd"
        },
        {
          name: "ITUNES", 
          link: "https://itunes.apple.com/tw/artist/cao-dong-mei-you-pai-dui/id1110664089?l=zh"
        },
        {
          name: "MMT", 
          link: "https://www.mymusictaste.com/artist/NoPartyforCaoDong,436884/"
        },
        {
          name: "Spotify", 
          link: "https://open.spotify.com/artist/3HXSUfI76zVZk71UMAeVfp"
        },
        {
          name: "TWITTER", 
          link: "https://twitter.com/nopartyforcd"
        },
        {
          name: "Weibo", 
          link: "http://www.weibo.com/u/5697791666?refer_flag=1001030101_"
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
