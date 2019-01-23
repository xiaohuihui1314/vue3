<template>
  <div>
    <NavBar/>
    <Main/>
  </div>
</template>

<script>
  import NavBar from './Navbar'
  import Main from './Main'
  export default {
    name:'Index',
    components: {
      NavBar,
      Main
    },
  }
</script>

<style scoped>

</style>
