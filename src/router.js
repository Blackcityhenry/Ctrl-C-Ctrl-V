import { createWebHistory, createRouter } from 'vue-router'

import Landing from './pages/Landing.vue'
import DancingRacoon from './components/DancingRacoon.vue'

const routes = [
  {
    path: '/',
    icon: 'mdi-home-outline',
    title: 'Landing',
    component: Landing
  },
  {
    path: '/dancing-racoon',
    icon: 'mdi-panda',
    title: 'Dancing Racoon',
    component: DancingRacoon
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
