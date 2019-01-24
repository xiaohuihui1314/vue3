<template>
  <div>
    <keep-alive :include="list">
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
        console.log(this.$store.state.home.menuListCache)
        return this.$store.state.home.menuListCache
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>

</style>
