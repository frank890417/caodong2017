<template lang="jade">
.page.pageVideo.section
  .back_img
    .left_img
      .tile
    .content
      .video_nav
        img.tag(src="/img/03_WORKS/歌名/山海.png")
        img.tag(src="/img/03_WORKS/歌名/山海.png")
        img.tag(src="/img/03_WORKS/歌名/山海.png")
      iframe(width="100%" height="700" src="https://www.youtube.com/embed/j2311FZWoFQ?rel=0" frameborder="0" allowfullscreen,
               :style="{transform:  `translateY(${(scrollTop-blockY)/(6) }px)`}")
      
</template>

<script>

import $ from 'jquery'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      blockY: -1
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
