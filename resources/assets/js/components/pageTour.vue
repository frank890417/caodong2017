<template lang="jade">
.page.pageTour.section(v-if="tourdata")
  .back_img
    .left_img
      .tile
    .content
      h2.pageTitle 巡迴
      .tours
        .tourbox(v-for="(tour,tid) in tourdata",
                :class="'size'+tour.size",
                :style="{transform:  `translateY(${(scrollTop-blockY)/(14-toZindex(tour)) }px)`}",
                @click="tourOpen=true; nowTourId=tid;")
          .date {{tour.date}}
          .date_eng {{tour.date_eng}}  &nbsp;
          .weekday {{tour.weekday}}
          .hold {{tour.hold}}
          .place {{tour.place}}
  fullPage(:status="tourOpen",
            @ended="tourOpen=false")
    transition(name="fade", mode="out-in")
      .fulltourContainer(:key="nowTourId")
        .fullTour
          h3 {{tourdata[nowTourId].date}} {{tourdata[nowTourId].date_eng}}
          .weekday {{tourdata[nowTourId].weekday}}
          .hold {{tourdata[nowTourId].hold}}
          .place {{tourdata[nowTourId].place}}
          hr
          p(v-html="tourdata[nowTourId].content")
          .btnLeft.hoverOpacity(@click="delta(-1)", v-if="nowTourId>0")
            img.icon(src="/img/元件/ICON/ICON-01.png", alt="" ,title="前一則")
            .arrowtext
              .date {{tourdata[nowTourId-1].date}}
              .place {{tourdata[nowTourId-1].place}}
          .btnRight.hoverOpacity(@click="delta(1)", v-if="nowTourId<tourdata.length-1")
            img.icon(src="/img/元件/ICON/ICON-02.png", alt="" ,title="後一則")
            .arrowtext
              .date {{tourdata[nowTourId+1].date}}
              .place {{tourdata[nowTourId+1].place}}


      
      
</template>

<script>
import $ from 'jquery'
import {mapState} from 'vuex'
import fullPage from './fullPage'
export default {
  data () {
    return {
      tourdata: [{
        date: "2017.11.25",
        date_eng: "NOV 25",
        weekday: "FRI",
        hold: "LEGACY",
        place: "TAIPEI 台北",
        size: "L",
        content: "2016 年，我們完成了第一張錄音作品《醜奴兒》。<br>它記錄著所有悲傷與愛、無力且憤慨的日子。<br>2016 年即將走到尾聲，2017 年世暄、耕佑即將入伍。<br>這段時間所經歷的種種無疑是刻骨銘心的。<br>浮浮沈沈，生活親像大海。<br><br>上船之後，最珍惜的是一起出航的緣分，和一起定舵的勇氣。<br>沒人確定能抵達什麼地方，那裡會有什麼。<br>可以確定的是，我們都身在同一片名叫生活的海上。<br>這不是起點，也不會是終點。<br> ",
        link: ""
      },{
        date: "2017.10.04",
        date_eng: "OCT 04",
        weekday: "FRI",
        hold: "LEGACY",
        place: "TAIPEI 台北",
        size: "M",
        content: "2016 年，我們完成了第一張錄音作品《醜奴兒》。<br>它記錄著所有悲傷與愛、無力且憤慨的日子。<br>2016 年即將走到尾聲，2017 年世暄、耕佑即將入伍。<br>這段時間所經歷的種種無疑是刻骨銘心的。<br>浮浮沈沈，生活親像大海。<br><br>上船之後，最珍惜的是一起出航的緣分，和一起定舵的勇氣。<br>沒人確定能抵達什麼地方，那裡會有什麼。<br>可以確定的是，我們都身在同一片名叫生活的海上。<br>這不是起點，也不會是終點。<br> ",
        link: ""
      },{
        date: "2016.8.23",
        date_eng: "AUG 23",
        weekday: "FRI",
        hold: "LEGACY",
        place: "TAIPEI 台北",
        size: "S",
        content: "2016 年，我們完成了第一張錄音作品《醜奴兒》。<br>它記錄著所有悲傷與愛、無力且憤慨的日子。<br>2016 年即將走到尾聲，2017 年世暄、耕佑即將入伍。<br>這段時間所經歷的種種無疑是刻骨銘心的。<br>浮浮沈沈，生活親像大海。<br><br>上船之後，最珍惜的是一起出航的緣分，和一起定舵的勇氣。<br>沒人確定能抵達什麼地方，那裡會有什麼。<br>可以確定的是，我們都身在同一片名叫生活的海上。<br>這不是起點，也不會是終點。<br> ",
        link: ""
      },{
        date: "2016.5.03",
        date_eng: "MAY 03",
        weekday: "FRI",
        hold: "LEGACY",
        place: "TAIPEI 台北",
        size: "XS",
        content: "2016 年，我們完成了第一張錄音作品《醜奴兒》。<br>它記錄著所有悲傷與愛、無力且憤慨的日子。<br>2016 年即將走到尾聲，2017 年世暄、耕佑即將入伍。<br>這段時間所經歷的種種無疑是刻骨銘心的。<br>浮浮沈沈，生活親像大海。<br><br>上船之後，最珍惜的是一起出航的緣分，和一起定舵的勇氣。<br>沒人確定能抵達什麼地方，那裡會有什麼。<br>可以確定的是，我們都身在同一片名叫生活的海上。<br>這不是起點，也不會是終點。<br> ",
        link: ""
      }],
      blockY: -1,
      tourOpen: false,
      nowTourId: 0
    }
  },
  computed:{
    ...mapState(['scrollTop','news'])
  },
  mounted(){
    this.blockY=$(".pageTour").offset().top
  },
  methods:{
    toZindex(tour){
      switch(tour.size){
        case "L":
          return 6
        case "M":
          return 4
        case "S":
          return 2
        case "XS":
          return 1

      }
    },
    delta(d){
      if (d<0 && this.nowTourId+d>=0)
        this.nowTourId+=d
      else if (d>0 && this.nowTourId+d<=this.tourdata.length-1){
        this.nowTourId+=d
      }
    }
  },
  components: {
    fullPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">


  
</style>
