<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header>
      <router-link to="/home">Home</router-link>
      <!-- 命名路由 -->
      <router-link :to="{name:'about'}">About</router-link>
      <!-- 命名路由，带参数 -->
      <router-link :to="{name:'user', params:{id:123}}">User123</router-link>
      <!-- 非命名路由，带参数，做对比 -->
      <!-- <router-link to="/user/123">User123</router-link> -->
      <router-link to="/user/456">User456</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:'Hello Vue!!!dddddfde'
  }
}
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
