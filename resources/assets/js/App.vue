<template lang="jade">
#fullpage
  pageIndex     
  pageIntro
  pageNews
  pageWorks
  pageVideo
  pageTour
  pageContact
  Navbar
  navFixed
  footer
    blockqoute Copyright 2017 © 草東沒有派對 No Party For Cao Dong, All right reserved.

  

</template>

<script>
import pageIndex from './components/pageIndex'
import pageIntro from './components/pageIntro'
import pageNews from './components/pageNews'
import pageWorks from './components/pageWorks'
import pageVideo from './components/pageVideo'
import pageContact from './components/pageContact'
import pageTour from './components/pageTour'
import Navbar from './components/Navbar'
import navFixed from './components/navFixed'
import $ from 'jquery'
export default {
  // name: 'App',
  components: {
    pageIndex, pageIntro, pageNews , pageWorks, pageVideo , pageContact ,pageTour,Navbar ,navFixed
  },
  mounted(){
    // $('#fullpage').fullpage({
    //   duration: 1000
    // })
  }
}
</script>

<style lang="sass?indentedSyntax">


</style>
