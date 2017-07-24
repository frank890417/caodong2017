<template lang="jade">
.navPanel.active(:class="{nav_open: nav_open}")
  router-link(to="/")
    img.navItem(src="/img/元件/目錄/HOME.png",
              @click="scrollTo('.pageIndex')",
                :class="{active: nowBlock=='pageIndex'}",
                )
  router-link(to="/intro")
    img.navItem(src="/img/元件/目錄/INTRO.png",
             @click="scrollTo('.pageIntro')",
              :class="{active: nowBlock=='pageIntro' || nowBlock=='pageNews'}")
  router-link(to="/works")
    img.navItem(src="/img/元件/目錄/WORKS.png",
             @click="scrollTo('.pageWorks')",
              :class="{active: nowBlock=='pageWorks' || nowBlock=='pageVideo'}")
  router-link(to="/tour")
    img.navItem(src="/img/元件/目錄/TOUR.png",
             @click="scrollTo('.pageTour')",
              :class="{active: nowBlock=='pageTour'}")
  router-link(to="/shop")
    img.navItem(src="/img/元件/目錄/SHOP.png",
             @click="scrollTo('.pageShop')",
              :class="{active: nowBlock=='pageShop'}")
  router-link(to="/contact")
    img.navItem(src="/img/元件/目錄/CONTACT.png",
             @click="scrollTo('.pageContact')",
              :class="{active: nowBlock=='pageContact'}")

  img.navLogo(src="/img/00_COMMON/LOGO.png",
              @click="scrollTo('.pageIndex')",
              :class="{active: scrollTop>indexHeight}")
  .btnLeftout
    img.down_arrow(src="/img/元件/ICON/ICON-08.png",
                   @click="nav_open=!nav_open")

</template>

<script>
import {mapState , mapMutations , mapActions} from 'vuex'
import $ from 'jquery'
export default {
  data () {
    return {
      indexHeight: -1,
      nav_open: false
    }
  },
  methods: {
    ...mapMutations(['scrollTo']),
    ...mapActions(['checkOut'])
  },
  mounted(){
    this.indexHeight=$(".pageIndex").outerHeight()
  },
  computed:{
    ...mapState(['scrollTop','cart','nowBlock'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
