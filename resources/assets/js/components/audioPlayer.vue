<script>
  import VueHowler from 'vue-howler'
  
  export default {
    mixins: [VueHowler],
    methods: {
      setTime(evt){
        //@click 設定進度
        this.setSeek(this.duration*evt.offsetX/evt.target.offsetWidth)
      },
      toMS(sec){
        return parseInt(sec/60)+":"+ ((sec%60)<10?("0"+(sec%60)): (sec%60))
      }
    }
  }
</script>
 
<template lang="jade">
  div.audioPlayer
    div(@click="togglePlayback")
      img.audioIcon.hoverOpacity(src="/img/元件/ICON/ICON-50.png", v-if="playing")
      img.audioIcon.hoverOpacity(src="/img/元件/ICON/ICON-49.png", v-else)
    .playingTrack(@click="setTime($event)")
      .nowPointer(:style="{width: ( (1-progress) * 100)+'%'}")
      .duration {{ toMS(parseInt(duration*progress)) }} / {{ toMS(parseInt(duration)) }}
    //span Progress: {{ (progress * 100) }}%
</template>

<style lang="sass">
.audioPlayer
  display: flex
  align-items: center

.playingTrack
  width: 220px
  height: 26px
  border: solid 1px rgba(white,0.7)
  cursor: pointer
  position: relative
  margin-right: 40px
  position: relative
  display: flex
  align-items: center
  justify-content: flex-end

.duration
  font-size: 14px
.nowPointer    
  height: 100%
  position: absolute
  right: 0
  top: 0
  background-color: rgba(#fff,0.3)
  border: solid 1px white
  pointer-events: none
  border-top: none
  border-bottom: none
  border-right: none
.audioIcon
  width: 30px
  cursor: pointer
  margin-right: 10px
</style>
