import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart', 
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/tos',
      name: 'termos', 
      component: () => import('../views/TosView.vue'),
    },
    {
      path: '/devol',
      name: 'devolucao', 
      component: () => import('../views/DevolView.vue'),
    },
    {
      path: '/send',
      name: 'envio', 
      component: () => import('../views/SendView.vue'),
    },
    {
      path: '/team',
      name: 'equipe', 
      component: () => import('../views/TeamView.vue'),
    },

  ],
})

export default router
