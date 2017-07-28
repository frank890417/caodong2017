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
          .btn.btn_up(@click="newspage-=newspage>0?1:0")
            img(src="/img/元件/ICON/ICON-54.png")
          .btn.btn_down(@click="newspage+=1")
            img(src="/img/元件/ICON/ICON-53.png")
          transition-group(name="fade-delay", mode="out-in", tag="div")
            li(v-for="(a_news,newsId) in news.slice(newspage*delta,newspage+delta)",
              :key="a_news")
              .date {{a_news.date}}
              .news_title(v-html="a_news.title",
              @click="newsOpen=true; nowNewsId=newsId")
  fullPage(:status="newsOpen",
            @ended="newsClose")
    .fullNewsContainer
      h2 {{news[nowNewsId].title}}
      h4 {{news[nowNewsId].date}}
      hr
      p(v-html="news[nowNewsId].content")
</template>

<script>

import $ from 'jquery'
import {mapState} from 'vuex'
import fullPage from './fullPage'

export default {
  name: 'pageNews',
  data () {
    return {
      // abouttexts: files,
      blockY: -1,
      newspage: 0,
      delta: 4,
      newsOpen: false,
      nowNewsId: 0
    }
  },
  computed:{
    ...mapState(['scrollTop','news'])
  },
  mounted(){
    this.blockY=$(".pageNews").offset().top
  },
  components: {
    fullPage
  },
  methods: {
    newsClose(){
      this.newsOpen=false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  
</style>
