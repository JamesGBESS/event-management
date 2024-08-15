import { createRouter, createWebHistory } from 'vue-router'
import EvEnts from '../views/EvEnts.vue'
import VueTest from '@/views/VueTest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VueTest
    },
  ]
})

export default router
