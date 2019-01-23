<template>
  <div>
    home
    <input type="text">
    <button @click="clear">清除</button>
  </div>
</template>

<script>
  export default {
    name: "home",
    mounted () {
      console.log(1);
    },
    methods:{
      clear(){
        window.list = ['view1'];
      }
    }
  }
</script>

<style scoped>

</style>
