<template lang="jade">
.page.pageTour.section
  .back_img
    .left_img
      .tile
    .content
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
@import "../../sass/_variables.sass"

.pageTour
  overflow: hidden
  +flex_center
  align-items: flex-end
  background-attachment: fixed
  text-align: left
  line-height: 40px
  li

    display: flex
    .date
      width: 110px

.tourbox
  border: solid 4px white
  // width: 200px
  font-weight: 600
  text-align: center
  letter-spacing: 1px
  font-size: 14px
  line-height: 24px
  cursor: pointer
  position: relative
  +trans
  &:hover
    transform: translate(-3px,-3px)
    background-color: white
    color: black
  .weekday,.date_eng
    display: inline-block
  .hold
    margin-top: 10px
  &.sizeL
    padding: 70px 70px
  &.sizeM
    padding: 45px 45px
  &.sizeS
    padding: 20px 20px
  &.sizeXS
    padding: 15px 10px
    display: block
    .weekday,.date_eng
      display: block
    .hold,.place,.date
      display: none


.back_img
  width: 80%
  height: 100vh
  // border-radius: 120px 120px 0px 0px
  // background: url("../assets/img/04_WORKS-02/UP_00.jpg")
  background-size: cover
  background-position: center bottom
  background-attachment: fixed
  display: flex
  position: absolute

  
  .left_img
    height: 100vh
    // border-radius: 120px 120px 0px 0px
    background: url("/img/04_WORKS-02/DOWN_00.jpg")
    background-size: 1500px auto
    background-position: center center  
    overflow: hidden


.content

  +flex_center
  flex-direction: row
  justify-content: space-around
  .top
    +flex_center
    flex-direction: row
    align-items: flex-start
    justify-content: flex-start

.about_text
  height: 50px
  display: block
  margin-bottom: 20px

.right_1
  width: 50%
.right_2
  width: 40%
  margin-top: 30vmin

  
</style>
