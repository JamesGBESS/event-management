import CreateEvent from '@/views/createEvent.vue'
import EventCalendar from '@/views/EventCalendar.vue'
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
    
  ]
})

export default router
