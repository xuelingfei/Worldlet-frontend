import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/home-view"

const routes = [
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/account-book",
    name: "account-book",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AccountBook" */ "@/views/account-book/index.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
