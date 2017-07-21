<template lang="jade">
.page.pageVideo.section
  .back_img
    .left_img
      .tile
    .content
      .col_video_selector
        .item(v-for="v in videos",
              :style="{'background-image': 'url('+v.cover+')'}")
          .hoverForm  
            h2 {{v.title}}

      //.video_nav
        img.tag(src="/img/03_WORKS/歌名/山海.png")
        img.tag(src="/img/03_WORKS/歌名/山海.png")
        img.tag(src="/img/03_WORKS/歌名/山海.png")
      //iframe(width="100%" height="700" src="https://www.youtube.com/embed/j2311FZWoFQ?rel=0" frameborder="0" allowfullscreen,
               :style="{transform:  `translateY(${(scrollTop-blockY)/(6) }px)`}")
      
</template>

<script>

import $ from 'jquery'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      blockY: -1,
      videos: [
        {
          title: "山海",
          cover: "http://img.youtube.com/vi/j2311FZWoFQ/0.jpg",
          url: "https://www.youtube.com/embed/j2311FZWoFQ?rel=0"
        },{
          title: "",
          cover: "",
          url: "https://www.youtube.com/embed/j2311FZWoFQ?rel=0"
        },{
          title: "",
          cover: "",
          url: "https://www.youtube.com/embed/j2311FZWoFQ?rel=0"
        },{
          title: "",
          cover: "",
          url: "https://www.youtube.com/embed/j2311FZWoFQ?rel=0"
        },{
          title: "",
          cover: "",
          url: "https://www.youtube.com/embed/j2311FZWoFQ?rel=0"
        },{
          title: "",
          cover: "",
          url: "https://www.youtube.com/embed/j2311FZWoFQ?rel=0"
        },{
          title: "",
          cover: "",
          url: "https://www.youtube.com/embed/j2311FZWoFQ?rel=0"
        },{
          title: "",
          cover: "",
          url: "https://www.youtube.com/embed/j2311FZWoFQ?rel=0"
        }
      ]
    }
  },
  computed:{
    ...mapState(['scrollTop','news'])
  },
  mounted(){
    this.blockY=$(".pageVideo").offset().top
  }
}
</script>
<style scoped lang="sass">


  
</style>
