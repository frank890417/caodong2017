<template lang="jade">
#fullpage(:class="{navOpen: navOpen, mobile: mobile}")
  pageIndex     
  pageIntro
  pageNews
  pageWorks
  pageVideo
  pageTour
  pageShop
  pageContact
  Navbar
  userPanel
  footer
    
  

</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import pageIndex from './components/pageIndex'
import pageIntro from './components/pageIntro'
import pageNews from './components/pageNews'
import pageWorks from './components/pageWorks'
import pageVideo from './components/pageVideo'
import pageShop from './components/pageShop'
import pageContact from './components/pageContact'
import pageTour from './components/pageTour'
import Navbar from './components/Navbar'
import userPanel from './components/userPanel'
import $ from 'jquery'
export default {
  // name: 'App',
  components: {
    pageIndex, pageIntro, pageNews , pageWorks, pageShop, pageVideo , pageContact ,pageTour,Navbar ,userPanel
  },
  mounted(){
    // $('#fullpage').fullpage({
    //   duration: 1000
    // })
  },
  computed:{
    ...mapState(["navOpen","mobile"])
  }
}
</script>

<style lang="sass?indentedSyntax">


</style>
