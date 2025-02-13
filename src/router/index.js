import { createRouter, createWebHistory } from 'vue-router'
const menu = () => import('../views/layout/menu.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu,
    }
  ],
})

export default router
