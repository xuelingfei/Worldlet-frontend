import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "HomeView" */ "@/views/home-view/index.vue"),
  },
  {
    path: "/account-book",
    name: "account-book",
    component: () => import(/* webpackChunkName: "AccountBook" */ "@/views/account-book/index.vue"),
  },
  {
    path: "/back",
    redirect: "/backend",
  },
  {
    path: "/backend",
    component: () => import(/* webpackChunkName: "BackendLayout" */ "@/layout/BackendLayout/index.vue"),
    children: [
      {
        path: "",
        name: "backend-home",
        component: () => import(/* webpackChunkName: "BackendHome" */ "@/views/home-view/index.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
