<template lang='jade'>
  .btn_checkOut(@click="checkOut") [{{cart.count()}}] 結帳
</template>

<script>
    export default {
        mounted() {
            console.log('example mounted.')
        }
    }
</script>
