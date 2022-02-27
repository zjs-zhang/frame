<template>
  <div id="app">
    <ul>
      <!-- 路由的跳转需要使用 router-link 组件,默认 router-link 组件就默认解析成 a 标签-->
      <!-- 地址完全匹配 -->
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
}
</script>

<style></style>
