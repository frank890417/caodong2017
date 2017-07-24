<template lang="jade">
.page.pageTour.section
  .back_img
    .left_img
      .tile
    .content
      h2 巡迴
      .tours
        .tourbox(v-for="tour in tourdata",
                :class="'size'+tour.size",
                :style="{transform:  `translateY(${(scrollTop-blockY)/(14-toZindex(tour)) }px)`}")
          .date {{tour.date}}
          .date_eng {{tour.date_eng}}  &nbsp;
          .weekday {{tour.weekday}}
          .hold {{tour.hold}}
          .place {{tour.place}}


      
      
</template>

<script>
import $ from 'jquery'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      tourdata: [{
        date: "2017.11.25",
        date_eng: "NOV 25",
        weekday: "FRI",
        hold: "LEGACY",
        place: "TAIPEI 台北",
        size: "L"
      },{
        date: "2017.11.25",
        date_eng: "NOV 25",
        weekday: "FRI",
        hold: "LEGACY",
        place: "TAIPEI 台北",
        size: "M"
      },{
        date: "2017.11.25",
        date_eng: "NOV 25",
        weekday: "FRI",
        hold: "LEGACY",
        place: "TAIPEI 台北",
        size: "S"
      },{
        date: "2017.11.25",
        date_eng: "NOV 25",
        weekday: "FRI",
        hold: "LEGACY",
        place: "TAIPEI 台北",
        size: "XS"
      }],
      blockY: -1
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">


  
</style>
