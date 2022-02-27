import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import PostListTitle from "../views/PostListTitle.vue"
import PostList from "../views/PostList.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        component: PostListTitle,
        children: [
          {
            path: "",
            name: "Home",
            component: PostList,
          },
        ],
      },
      {
        path: ":type1",
        component: PostListTitle,
        props: true,
        children: [
          {
            path: "",
            component: PostList,
          },
          {
            path: ":type2",
            component: PostList,
          },
        ],
      },
    ],
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
