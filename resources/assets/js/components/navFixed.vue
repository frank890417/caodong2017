<template lang="jade">
.navFixed
  .btn_checkOut(@click="checkOut") [{{cart.length}}] 結帳
</template>

<script>
import {mapState , mapMutations , mapActions} from 'vuex'
import $ from 'jquery'
export default {
  data () {
    return {
      indexHeight: -1
    }
  },
  methods: {
    ...mapMutations(['scrollTo']),
    ...mapActions(['checkOut'])
  },
  mounted(){
    this.indexHeight=$(".pageIndex").outerHeight()
  },
  computed:{
    ...mapState(['scrollTop','cart'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

@import "../../sass/_variables.sass"

.btn_checkOut
  position: fixed
  right: 50px
  top: 50px
  color: white
  z-index: 1000
  cursor: pointer
