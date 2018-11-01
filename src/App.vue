<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // 初始化的去获取全局所需要使用的category_list数据
    this.$store.dispatch('action_get_category_list')
    //如果已经登录了，就去获取用户购物车的数据
    if ( this.$store.state.commons.user_state ) {
      this.$store.dispatch('action_get_user_cart')
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
  /*height:100%;*/
  /*margin-top: 60px;*/
}
</style>
