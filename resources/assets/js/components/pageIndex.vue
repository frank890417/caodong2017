<template lang="jade">
.page.pageIndex.section

  .bg
  .tile
  .time
    p
      span(v-for="(word,wid) in message_wording" ,
           v-html="convert_br(word) "
           v-if="wid<counting")
      span(:style="{opacity: (time%5) /5}")  █
  .front_element
    img.logo(src="/img/00_COMMON/LOGO.png")
    br
    router-link(to="/intro")
      img.arrow_down(src="/img/元件/icon/ICON-53.png",
                    @click="scrollTo('.pageIntro')")
</template>

<script>
import {mapState , mapMutations} from 'vuex'
export default {
  name: 'pageIndex',
  data () {
    return {
      message_wording: "05,26,2017|02:00 A.M.||LOADING ... ...",
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
