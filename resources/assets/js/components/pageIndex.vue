<template lang="jade">
.page.pageIndex.section

  .bg
  .tile
  .time
    p A.M. 0 5 , 2 6 , 2 0 1 7  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0 2 : 0 0    
    p
      span(v-for="(word,wid) in message_wording" ,
           v-html="convert_br(word) "
           v-if="wid<counting")
      span(:style="{opacity: (time%5) /5}")  █
  .front_element
    img.logo(src="/img/00_COMMON/LOGO.png")
    br
    img.arrow_down(src="/img/元件/icon/ICON-03.png",
                   @click="scrollTo('.pageIntro')")
</template>

<script>
import {mapState , mapMutations} from 'vuex'
export default {
  name: 'pageIndex',
  data () {
    return {
      message_wording: "記錄對於土地對於人情世俗的觀感|節奏遊走在雀躍的Disco Beats與帶有油漬味道的重破音大拍之間 ......|時而細膩低語呢喃  時而絕望放聲嘶吼 ......",
      counting: 0,
      time: 0
    }
  },
  mounted() {
    setInterval(()=>{
      if (Math.random()>0.5){
        this.counting++
      }
      this.time++
    } ,100)
  },
  methods: {
    ...mapMutations(['scrollTo']),
    convert_br(content){
      return content.replace('|','<br>') 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import "../../sass/_variables.sass"

.pageIndex
  overflow: hidden

.time
  position: absolute
  left: 50px
  top: 30px
  color: white
  z-index: 3
  text-align: left
  line-height: 30px
  font-weight: 700
  letter-spacing: 1px

.bg,.tile
  position: absolute
  left: 0
  top: 0
.bg
  background-image: url("/img/00_HOME/BG-01.jpg")
  background-size: cover
  +size(100%)
  z-index: 0


@keyframes index_tv_tile
  0%
    transform: translateY(-0px)
  30%
    transform: translateY(-4px)
  50%
    transform: translateY(-8px)
  100%
    transform: translateY(-18px)
.tile
  background-image: linear-gradient(transparent 0%, transparent 24% , black 24%, black 100%) 
  background-repeat: repeat
  background-size: 100% 18px
  +size(120%)
  z-index: 1
  animation: index_tv_tile 2s infinite linear

.front_element
  +ab_full
  z-index: 2
  +flex_center
  flex-direction: column
  .arrow_down
    width: 50px
  .logo
    width: 350px
  
  
</style>
