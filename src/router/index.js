import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/',
    component: () => import('@/layout/FrontendLayout/index.vue'),
    children: [
      {
        path: '',
        name: 'frontend-home',
        component: () => import('@/views/frontend-home/index.vue'),
      },
    ],
  },
  {
    path: '/account-book',
    name: 'account-book',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/account-book/index.vue'),
  },
  {
    path: '/back',
    redirect: '/backend',
  },
  {
    path: '/backend',
    component: () => import('@/layout/BackendLayout/index.vue'),
    children: [
      {
        path: '',
        name: 'backend-home',
        component: () => import('@/views/frontend-home/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
