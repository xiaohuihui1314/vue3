<template>
  <div>
    view1
    <button @click="clear">清除</button>
    <button @click="add">添加缓存</button>
  </div>
</template>

<script>
  export default {
    name: "view1",
    mounted () {
      console.log(2);
    },
    methods:{
      add(){
        this.$store.dispatch('addMenuCache', 'view1');
      },
      clear(){
        this.$store.dispatch('deleteMenuCache', 'view1');
      },
    }
  }
</script>

<style scoped>

</style>
