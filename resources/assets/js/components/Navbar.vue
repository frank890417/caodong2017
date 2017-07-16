<template lang="jade">
.navPanel(:class="{active: scrollTop>indexHeight}")
  img.navItem(src="/img/00_COMMON/HOME.png", @click="scrollTo('.pageIndex')")
  img.navItem(src="/img/00_COMMON/INTRO.png", @click="scrollTo('.pagetrIno')")
  img.navItem(src="/img/00_COMMON/WORKS.png", @click="scrollTo('.pageWorks')")
  img.navItem(src="/img/00_COMMON/TOUR.png", @click="scrollTo('.pageTour')")
  img.navItem(src="/img/00_COMMON/CONTACT.png", @click="scrollTo('.pageContact')")

  img.navLogo(src="/img/00_COMMON/LOGO.png",
              :class="{active: scrollTop>indexHeight}")


</template>

<script>
import {mapState , mapMutations} from 'vuex'
import $ from 'jquery'
export default {
  data () {
    return {
      indexHeight: -1
    }
  },
  methods: {
    ...mapMutations(['scrollTo'])
  },
  mounted(){
    this.indexHeight=$(".pageIndex").outerHeight()
  },
  computed:{
    ...mapState(['scrollTop'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

@import "../../sass/_variables.sass"

.navPanel
  position: fixed
  z-index: 10
  left: 7%
  bottom: 10%
  display: flex
  flex-direction: column
  
  .navItem
    width: 75px
    // height: 20px
    margin-bottom: 20px
    cursor: pointer
    user-select: none
    opacity: 0
    +trans
    &:hover
      transform: translate(-2px,-2px)
  &.active
    .navItem
      opacity: 1

.navLogo
  position: fixed
  top: 8%
  width: 230px
  opacity: 0
  +trans
  &.active
    opacity: 1



  
</style>
