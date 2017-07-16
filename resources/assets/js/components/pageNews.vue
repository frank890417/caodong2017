<template lang="jade">
.page.pageNews.section
  .back_img

    .left_img
      .tile
    .content
      .top
        img.right_1(src="/img/02_INTRO-02/UP_pic/cover-1050x700.jpg",
                    :style="{'transform':`translateY(${-scrollTop/5+320}px)`}")
        img.right_2(src="/img/02_INTRO-02/UP_pic/DSC_1777.jpg",
                    :style="{'transform':`translateY(${-scrollTop/7+270}px)`}")
        .texts
          //.text(v-for="about in abouttexts")
            img(:src="about.img",
                :style="{'transform':`translateY(${(scrollTop-blockY)/(20-about.zIndex)}px)`}")
      .bottom
        ul.news_block
          li(v-for="a_news in news")
            .date {{a_news.date}}
            .content(v-html="a_news.content")
      
</template>

<script>

import $ from 'jquery'
import {mapState} from 'vuex'

export default {
  name: 'pageNews',
  data () {
    return {
      abouttexts: files,
      blockY: -1
    }
  },
  computed:{
    ...mapState(['scrollTop','news'])
  },
  mounted(){
    this.blockY=$(".pageNews").offset().top
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

@import "../../sass/_variables.sass"

.pageNews
  position: relative
  height: 100vh
  width: 100%
  overflow: hidden
  +flex_center
  align-items: flex-end
  background-attachment: fixed
  
  li

    display: flex
    .date
      width: 110px

.back_img
  width: 80%
  height: 100vh
  // border-radius: 120px 120px 0px 0px
  // background: url("/img/02_INTRO-02/UP_00.jpg")
  background-size: cover
  background-position: center bottom
  background-attachment: fixed
  display: flex
  position: absolute

  
  .left_img
    height: 100vh
    // border-radius: 120px 120px 0px 0px
    background: url("/img/02_INTRO-02/DOWN_00.jpg")
    background-size: 1500px auto
    background-position: 25% center  
    overflow: hidden


.content

  +flex_center
  flex-direction: column
  .top
    +flex_center
    flex-direction: row
    align-items: flex-start
    justify-content: flex-start

.news_block
  text-align: left
  padding: 0
  font-weight: 500
  .content
    display: block

.texts
  position: absolute
  right: 0
  width: 100%
  text-align: left
  padding-left: 20%
  box-sizing: border-box
  padding-top: 5%
  .text
    vertical-align: top
    &:nth-child(1)
      opacity: 0.3
    &:nth-child(2)
      opacity: 0.4
      margin-left: 40%
    &:nth-child(3)
      margin-left: 25%
      opacity: 0.8
      margin-right: 20px
      display: inline-block
    &:nth-child(4)
      opacity: 0.3
      display: inline-block
    &:nth-child(5)
      margin-left: 35%
      opacity: 0.8
      margin-right: 20px
      display: inline-block
    &:nth-child(6)
      opacity: 0.3
      display: inline-block
    &:nth-child(7)
      margin-top: 140px
      opacity: 0.8
      display: inline-block
    &:nth-child(8)
      margin-left: 10%
      opacity: 0.3
      display: block
    &:nth-child(9)
      opacity: 1
      display: inline-block
      margin-right: 20px
    &:nth-child(10)
      opacity: 0.6
      display: inline-block
    img
      height: 4.6vmin

    &:last-child
      img
        height: 80px

.right_1
  width: 50%
.right_2
  width: 40%
  margin-top: 30vmin

  
</style>
