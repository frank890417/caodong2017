<template lang="jade">
.page.pageIntro.section
  .back_img(:style="{'background-position': 'right '+ ((scrollTop-blockY)/15-100)+'px'}")
    .left_img
      .tile
    .content
      //img.intro_title(src="/img/00_COMMON/INTRO.png")
      img.about_text(src="/img/01_INTRO/ABOUT/01.png")
      img.about_text(src="/img/01_INTRO/ABOUT/02.png")
      img.about_text(src="/img/01_INTRO/ABOUT/03.png")
      img.down_arrow(src="/img/01_INTRO/ICON-03.png")
      img.about_text(src="/img/01_INTRO/ABOUT/04.png")


</template>

<script>
import $ from 'jquery'
import {mapState} from 'vuex'
export default {
  name: 'pageIntro',
  data () {
    return {
      blockY: -1
    }
  },
  computed:{
    ...mapState(['scrollTop'])
  },
  mounted(){
    this.blockY=$(".pageIntro").offset().top
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
