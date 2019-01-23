<template>
  <div>
    <keep-alive :include="list" :a="key">
      <router-view>
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
      </router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data () {
      return {}
    },
    computed: {
      key () {
        console.log(this.$route)
        console.log(this.$route.fullPath)
        return this.$route.fullPath
      },
      list () {
        const list = window.list = '' || ['home'];
        console.log(list)
        return list
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>

</style>
