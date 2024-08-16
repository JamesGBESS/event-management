import AuTh from '@/views/AuTh.vue'
import CreateEvent from '@/views/createEvent.vue'
import EventCalendar from '@/views/EventCalendar.vue'
import LoGin from '@/views/LoGin.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EventCalendar
    },
    {
      path: '/create',
      name: 'creation',
      component: CreateEvent
    },
    {
      path: '/login',
      name: 'Connection',
      component: LoGin
    },
    {
      path: '/signin',
      name: 'Auth',
      component: AuTh
    },
    
  ]
})

export default router
