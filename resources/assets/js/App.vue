<template lang="jade">
#fullpage
  //router-view
  pageBuy
  pageIndex     
  pageIntro
  pageNews
  pageWorks
  pageVideo
  pageTour
  pageContact
  footer
    blockqoute Copyright 2017 © 草東沒有派對 No Party For Cao Dong, All right reserved.

  Navbar

</template>

<script>
import pageBuy from './components/pageBuy'
import pageIndex from './components/pageIndex'
import pageIntro from './components/pageIntro'
import pageNews from './components/pageNews'
import pageWorks from './components/pageWorks'
import pageVideo from './components/pageVideo'
import pageContact from './components/pageContact'
import pageTour from './components/pageTour'
import Navbar from './components/Navbar'
import $ from 'jquery'
export default {
  // name: 'App',
  components: {
    pageIndex, pageIntro, pageNews , pageWorks, pageVideo , pageContact ,pageTour,Navbar , pageBuy
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
