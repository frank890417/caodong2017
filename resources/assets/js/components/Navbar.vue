<template lang="jade">
.navPanel.active
  //pre(v-html="$route.path")
  router-link(to="/")
    img.navItem(src="/img/元件/目錄/HOME.png",
              @click="scrollTo('.pageIndex')",
                :class="{active: $route.path=='/'}",
                )
  router-link(to="/intro")
    img.navItem(src="/img/元件/目錄/INTRO.png",
             @click="scrollTo('.pageIntro')",
              :class="{active: $route.path=='/intro'}")
  router-link(to="/works")
    img.navItem(src="/img/元件/目錄/WORKS.png",
             @click="scrollTo('.pageWorks')",
              :class="{active: $route.path=='/works'}")
  router-link(to="/shop")
    img.navItem(src="/img/元件/目錄/SHOP.png",
             @click="scrollTo('.pageShop')",
              :class="{active: $route.path=='/shop'}")
  router-link(to="/tour")
    img.navItem(src="/img/元件/目錄/TOUR.png",
             @click="scrollTo('.pageTour')",
              :class="{active: $route.path=='/tour'}")
  router-link(to="/contact")
    img.navItem(src="/img/元件/目錄/CONTACT.png",
             @click="scrollTo('.pageContact')",
              :class="{active: $route.path=='/contact'}")

  img.navLogo(src="/img/00_COMMON/LOGO.png",
              :class="{active: scrollTop>indexHeight}")

</template>

<script>
import {mapState , mapMutations , mapActions} from 'vuex'
import $ from 'jquery'
export default {
  data () {
    return {
      indexHeight: -1
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
    ...mapState(['scrollTop','cart'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
