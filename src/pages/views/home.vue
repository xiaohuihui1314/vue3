<template>
  <div>
    home
    <input type="text">
    <button @click="add">添加缓存</button>
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
      add(){
        this.$store.dispatch('addMenuCache', 'home');
      },
      clear(){
        this.$store.dispatch('deleteMenuCache', 'home');
      },
    }
  }
</script>

<style scoped>

</style>
