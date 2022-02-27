import Vue from "vue"
import VueRouter from "vue-router"
import Main from "../views/Main.vue"
import Cart from "../views/Cart.vue"
import Store from "../views/Store.vue"
import Me from "../views/Me.vue"
import CartList from "../views/CartList.vue"
import Lottery from "../views/Lottery.vue"
import Product from "../views/Product.vue"
import NotFound from "../views/NotFound.vue"
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

export const authRoutes = [
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    children: [
      {
        path: "cartlist",
        name: "cartlist",
        component: CartList,
        children: [
          {
            path: "lottery",
            name: "lottery",
            component: Lottery,
          },
          {
            path: "product",
            name: "product",
            component: Product,
          },
        ],
      },
    ],
  },
  {
    path: "store",
    name: "store",
    component: Store,
  },
  {
    path: "me",
    name: "me",
    component: Me,
  },
]
export const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    // name: "main",
    component: Main,
    children: [
      {
        path: "",
        name: "main",
        component: Home,
      },
    ],
  },
  {
    path: "*",
    name: "notfound",
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})
// router.addRoutes(authRoutes)

export default router
