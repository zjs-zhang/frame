<template>
  <div class="home">
    <ul class="home-one cf">
      <li>
        <router-link :class="$route.path==='/'?'router-link-active':''" to="/recommended">推荐</router-link>
      </li>
      <li>
        <router-link to="/backend">后端</router-link>
      </li>
      <li>
        <router-link to="/frontend">前端</router-link>
      </li>
    </ul>
    <!-- 文章列表,所有的文章列表布局和样式都一样只不过是数据发生了变化 -->
    <!-- 这种情况我们通常会用一个组件表示，根据不同的数据作展示 -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style>
.home > ul .router-link-active {
  color: #007fff;
}
.home ul li {
  list-style: none;
  float: left;
}
.cf:before,
.cf:after {
  content: "";
  display: block;
}
.cf:after {
  clear: both;
}
</style>
