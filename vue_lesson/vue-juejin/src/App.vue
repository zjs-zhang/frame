<template>
  <div class="app">
    <div class="nav">
      <!-- <router-link to="/" active-class="active" exact>首页</router-link> -->
      <span @click="goHome">
        <img src="https://s3.pstatp.com/toutiao/xitu_juejin_web/img/logo.a7995ad.svg" alt />
      </span>
      <!-- 命名路由 -->
      <!-- <router-link :to="{name:'home'}"> -->
      <!-- <img src="https://s3.pstatp.com/toutiao/xitu_juejin_web/img/logo.a7995ad.svg" alt /> -->
      <!-- </router-link> -->
      <router-link
        to="/"
        :class="['/b','/title','/about','/activity'].includes($route.path)?  '':'router-link-active'  "
        exact
      >首页</router-link>
      <router-link to="/b">沸点</router-link>
      <router-link to="/title">话题</router-link>
      <router-link to="/about">小册</router-link>
      <router-link to="/activity">活动</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    goHome() {
      // this.$router.push("/");
      // this.$router.push({ path: "/frontend", query: { sort: "newest" } });
      // query是查询，params是动态参数
      //name 是命名路由(直接到相应的地址)
      this.$router.push({
        name: "postlist",
        params: { type: "backend" },
        query: { sort: "newest" },
      });
      // this.$router.push({ name: "home" });
    },
  },
};
</script>


<style>
.app {
  width: 500px;
  margin: 0 auto;
}
span {
  display: block;
  float: left;
  margin-right: 10px;
}
.app a {
  text-decoration: none;
  color: #71777c;
  margin-right: 20px;
}
/* #app .active {
  color: #007fff;
} */

.nav .router-link-active {
  color: #007fff;

  height: 45px;
  line-height: 45px;
}
/* .app a:hover {
  color: #007fff;
} */
</style>
