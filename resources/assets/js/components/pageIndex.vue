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
    router-link(to="/intro")
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

</style>
