<template lang="jade">
.page.pageNews.section
  .back_img

    .left_img
      .tile
    .content
      .top(:style="{'transform':`translateY(${-(scrollTop-blockY)/(8)}px)`}")
        img.news_cover(src="/img/02_INTRO-02/UP_pic/cover-1050x700.jpg",
                    )
        //img.right_2(src="/img/02_INTRO-02/UP_pic/DSC_1777.jpg",
                    :style="{'transform':`translateY(${-scrollTop/7+270}px)`}")
        .texts
          //.text(v-for="about in abouttexts")
            img(:src="about.img",
                :style="{'transform':`translateY(${(scrollTop-blockY)/(20-about.zIndex)}px)`}")

        ul.news_block(:style="{'transform':`translateY(${-(200+scrollTop-blockY)/(8)}px)`}")
          .btn.btn_up(@click="newspage-=newspage>0?1:0") up
          .btn.btn_down(@click="newspage+=1") down
          li(v-for="(a_news,news_id) in news.slice(newspage*6,newspage*6+6)",
             :key="news_id")
            .date {{a_news.date}}
            .news_content(v-html="a_news.content")
      
</template>

<script>

import $ from 'jquery'
import {mapState} from 'vuex'

export default {
  name: 'pageNews',
  data () {
    return {
      // abouttexts: files,
      blockY: -1,
      newspage: 0
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
  padding-left: 30px
  padding-right: 30px
  letter-spacing: 0px
  box-sizing: border-box
  transform: translateX(100px)
  +flex_center
  
.top
  background: linear-gradient(180deg, #221816 0% , rgba(#221816,0) 70%)
  position: relative

.news_cover
  width: calc(100% - 100px)
  float: right
  

.news_block
  text-align: left
  padding: 0
  font-weight: 500
  position: absolute
  width: 380px
  bottom: -200px
  left: 0
  background: linear-gradient(180deg, #221816 0% , rgba(#221816,0.8) 60% , rgba(#221816,0) 100%)
  padding: 20px
  padding-bottom: 100px
  padding-top: 50px

  .btn_up
    +ab_center
    top: -20px

  .btn_down
    +ab_center
    top: initial
    bottom: -20px


  li

    display: flex
    margin-bottom: 20px
    color: rgba(white,0.7)
    .news_content
      //color: rgba(white,0.7)
    .date
      flex-shrink: 0
      width: 90px
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
