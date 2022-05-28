import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('../views/Reg.vue')
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import('../views/Forget.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router