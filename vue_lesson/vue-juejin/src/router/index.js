import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Hot from "../views/Hot.vue"
import Title from "../views/Title.vue"
import About from "../views/About.vue"
import Activity from "../views/Activity.vue"
import PostList from "../views/PostList.vue"
import NotFound from "../views/NotFound.vue"

Vue.use(VueRouter)
// 路由的匹配规则匹配到了一个就不匹配，而且顺序是从上到下的而且是完全匹配
const routes = [
  {
    path: "/404",
    //匹配所有
    component: NotFound,
  },
  {
    path: "/about",
    // name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 在这导入 about 组件的好处是只有在路由匹配到当前的时候才会导入 About 组件
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
    component: About,
  },
  {
    path: "/hot",
    // name: "Hot",
    component: Hot,
    alias: "/b",
  },
  // 重定向
  {
    path: "/feidian",
    redirect: "/hot",
  },
  {
    path: "/title",
    // name: "Title",
    component: Title,
  },
  {
    path: "/activity",
    // name: "Activity",
    component: Activity,
  },
  // Home 页面名需要设置子页面添加 children 属性
  // 子页面的展示也是需要使用 router-view
  {
    path: "/",
    //如果有默认子路由，要将name写再子路由上

    component: Home,
    // redirect: "/about",
    children: [
      // 默认显示的子路由
      {
        path: "",
        name: "home",
        component: PostList,
      },
      {
        path: ":type",
        name: "postlist",
        component: PostList,
        // 当你将 props 属性设置成 true 的时候 动态路由参数就会被当作 props 传递给路由组件
        // 这样组件内就可以直接通过 props 获取动态路由参数
        // props: true,
        // props 还可以设置成函数但是需要返回一个对象，这样写的好处，该函数默认接收当前路由（就相当于组件内的 this.$route）为参数，所以我们可以将路由的相关信息当作 props 传递给组件
        // props: { a: "haha" },
        props: (route) => ({ type: route.params.type }),
      },
    ],
  },
  {
    path: "*",
    //匹配所有
    redirect: "/404",
  },
]

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
})

export default router
