<template>
  <div class="menu-list">
    <ul>
      <li>
        <router-link tag="div" to="/home">Home</router-link>
      </li>
      <li>
        <router-link tag="div" to="/view1">view1</router-link>
      </li>
      <li>
        <router-link tag="div" to="/view2">view2</router-link>
      </li>
      <li>
        <router-link tag="div" to="/view3">view3</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style lang="scss" scoped>
  .menu-list {
    float: left;
    width: 300px;
    height: 100vh;
    background-color: #2c2c2f;
    color: #fff;

    li {
      line-height: 45px;
      text-align: center;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
    }
  }

</style>
