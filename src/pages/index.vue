<template>
  <div>
    <NavBar/>
    <TabList/>
    <Main/>
  </div>
</template>

<script>
  import NavBar from './Navbar'
  import Main from './Main'
  import TabList from './TabList'
  export default {
    name:'Index',
    components: {
      NavBar,
      TabList,
      Main,
    },
  }
</script>

<style scoped>

</style>
