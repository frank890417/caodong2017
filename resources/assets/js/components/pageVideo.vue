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

@import "../../sass/_variables.sass"

.pageVideo
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
  // background: url("/img/04_WORKS-02/UP_00.jpg")
  background-size: cover
  background-position: center bottom
  background-attachment: fixed
  display: flex
  position: absolute

  
  .left_img
    height: 100vh
    // border-radius: 120px 120px 0px 0px
    background: url("/img/04_WORKS-02/DOWN_00.jpg")
    background-size: 1500px auto
    background-position: 10% center  
    overflow: hidden

iframe
  mix-blend-mode: lighten

.video_nav
  width: 100%

  text-align: right
  display: flex
  align-items: flex-end
  justify-content: flex-end

  .tag  
    margin-left: 30px

  img
    height: 42px

.content

  +flex_center
  flex-direction: column
  .top
    +flex_center
    flex-direction: row
    align-items: flex-start
    justify-content: flex-start

.about_text
  height: 50px
  display: block
  margin-bottom: 20px

.right_1
  width: 50%
.right_2
  width: 40%
  margin-top: 30vmin

  
</style>
