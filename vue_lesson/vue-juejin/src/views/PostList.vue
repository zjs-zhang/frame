<template>
  <div class="list">
    <router-link
      :class="
        $route.query.sort === 'popular' || !$route.query.sort ? 'active' : ''
      "
      to="?sort=popular"
    >热门</router-link>
    <router-link :class="$route.query.sort === 'newest' ? 'active' : ''" to="?sort=newest">最新</router-link>
    <router-link
      :class="$route.query.sort === 'three_days_hottest' ? 'active' : ''"
      to="?sort=three_days_hottest"
    >热榜</router-link>
    <ul v-if="lists.length">
      <li v-for="list in lists" :key="list.id">{{ list.title }}</li>
    </ul>
    <!-- <div v-else-if="!success">稍等</div> -->
    <div v-else>{{showText}}</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PostList",
  props: ["type"],
  // 我们要根据地址栏的信息判断当前要展示的文章列表的类别
  //  vue-router 提供了一些方案获取地址栏的信息
  //  $route  代表当前配到的路由的信息
  //  $router 代表整个 vue 的路由实例信息，也就是自己创建的路由实例
  data() {
    return {
      lists: [],
      //请求是否成功，成功显示稍等或暂无此类文章
      // success: false,
      showText: "稍等",
    };
  },
  //   computed: {
  //     x() {
  //       console.log(this.$route.params.type);
  //       return this.$route.params.type;
  //     },
  //   },
  // 侦听器监听的不一定是 data 也可以是该组件内的各种信息 data  props  $route 。。。 计算属性也一样
  watch: {
    //这里的$route不用加this
    "$route.fullPath": {
      handler(newValue, oldValue) {
        console.log(newValue, oldValue);
        console.log(this.type);
        // console.log(this.$route.path);
        // 获取列表类别以及筛选条件
        // 当地址是 '/' 时  type = recommended   sort = popular
        // 当地址只有 '/xx' 是  type = xx   sort = popular
        // 当地址只有 '/xx?sort=xxx'  type = xx   sort = xxx
        // /frontend -->/frontend?sort=popular  不发送请求  重复了
        if (!(newValue.includes(oldValue) && newValue.includes("popular"))) {
          //无此类别，即不发请求
          if (
            ["recommended", "frontend", "backend"].includes(
              this.$route.params.type
            ) ||
            !this.$route.params.type
          ) {
            this.lists = [];
            this.showText = "稍等";
            console.log(1);
            // this.success = false;
            const type = this.$route.params.type || "recommended";
            const sort = this.$route.query.sort || "popular";
            const query =
              type === "recommended"
                ? `isRecommended=true&sort=${sort}`
                : `type=${type}&sort=${sort}`;
            axios.get(`http://localhost:3008/posts?${query}`).then((res) => {
              setTimeout(() => {
                this.lists = res.data;
                // this.success = true;
              }, 1000);
            });
          } else {
            this.showText = "暂无此类文章";
          }
        }
      },
      immediate: true,
    },
  },
  // created() {
  //   当前的 PostList 组件作为动态组件，当动态页面之间进行切换的时候组件并不会销毁而是一直存在的
  //   console.log(this.$route);
  //    根据获取到的类别向后台发送请求获取对应的数据展示 文章列表
  // },
  // 只要在分别点击 推荐 前端 和后端链接的时候控制台输出对应类别

  // 1. 监听 $route.path (如果切换了页面) 发请求获取对应的所有的文章列表，然后再根据计算属性计算出当前需要展示的 最新 或者 推荐 或者 热榜的文章
  // 2. 监听 $route.fullPath (切换了页面以及点击当前页面内的三个类别按钮都会执行)，然后根据当前页面的类别 和 页面内的文章的最新 或者 推荐 或者 热榜 去发送请求拿数据展示
};
</script>
<style>
.list {
  padding-left: 40px;
}
.list a.active {
  color: #007fff;
}
</style>
