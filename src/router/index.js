import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountryDetails from '../views/CountryDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/name/:id',
      name: 'CountryDetails',
      component: CountryDetails,
      props: true
    }
  ]
})

export default router