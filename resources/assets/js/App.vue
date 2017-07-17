<template lang="jade">
#fullpage
  pageIndex     
  pageIntro
  pageNews
  pageWorks
  pageVideo
  pageBuy
  pageTour
  pageContact
  Navbar
  userPanel
  footer
    blockqoute Copyright 2017 © 草東沒有派對 No Party For Cao Dong, All right reserved.

  

</template>

<script>
import pageIndex from './components/pageIndex'
import pageIntro from './components/pageIntro'
import pageNews from './components/pageNews'
import pageWorks from './components/pageWorks'
import pageVideo from './components/pageVideo'
import pageBuy from './components/pageBuy'
import pageContact from './components/pageContact'
import pageTour from './components/pageTour'
import Navbar from './components/Navbar'
import userPanel from './components/userPanel'
import $ from 'jquery'
export default {
  // name: 'App',
  components: {
    pageIndex, pageIntro, pageNews , pageWorks, pageBuy, pageVideo , pageContact ,pageTour,Navbar ,userPanel
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
