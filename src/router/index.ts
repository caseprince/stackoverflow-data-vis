import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'instructions',
    component: () => import('@/pages/HomeInstructions.vue'),
  },
  {
    path: '/exercise',
    name: 'exercise',
    component: () => import('@/pages/Exercise.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
