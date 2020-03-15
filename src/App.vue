<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App1'
  }
</script>

<style>
  * {
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
