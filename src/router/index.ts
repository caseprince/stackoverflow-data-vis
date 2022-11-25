import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)',
    name: 'Stack Overflow Visualizer',
    component: () => import('@/pages/SOVisualizer.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
