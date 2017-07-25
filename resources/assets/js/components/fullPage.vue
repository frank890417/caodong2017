<template lang='jade'>
.full_container(:class="{active: full}")
  .btn_video_close(@click="ended") ✕
  slot
</template>

<script>
import $ from "jquery"
export default {
  props: ["status"],
  mounted() {
    this.full=this.status
  },
  data(){
    return {
      full: false
    }
  },
  watch: {
    status(){
      this.full=this.status
    }
  },
  computed:{
  },
  methods: {
    ended(){
      this.$emit("ended")
    }
  }
}
</script>

<style scoped lang="sass">
$color_theme: #888
.btn_video_close
  position: absolute
  right: 30px
  top: 150px
  color: white
  font-size: 40px
  z-index: 30
  cursor: pointer
  transition: 0.5s
  &:hover
    color: $color_theme
.full_container
  transition: 0.5s
  opacity: 0
  position: fixed
  width: 100%
  height: 100%
  padding: 20px
  top: 0
  left: 0
  z-index: 10
  display: flex
  align-items: center
  justify-content: center
  pointer-events: none
  background-color: rgba(black,0.9)
  flex-direction: column

  .fullContent
    max-width: 550px
  // &:before
  //   content: ""
  //   position: absolute
  //   width: 100%
  //   height: 100%
  //   top: 0
  //   left: 0
  //   background-color: black
  //   opacity: 0
  //   pointer-events: none
  //   transition: 0.5s

  &.active
    pointer-events: initial
    opacity: 1
    &:before
      opacity: 1

</style>