<template>
  <div class="menu-list">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <router-link tag="div" :to="item">{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    computed: {
      list () {
        console.log(this.$store.state.home.menuListCache)
        return this.$store.state.home.menuListCache
      }
    },
  }
</script>

<style lang="scss" scoped>
  .menu-list {
    margin-left: 300px;
    height: 50px;
    line-height: 50px;
    background-color: #9d9da8;
    color: #fff;

    li {
      display: inline-block;
      padding: 0 10px;
      text-align: center;
      cursor: pointer;
    }
  }

</style>
