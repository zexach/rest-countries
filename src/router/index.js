import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountryView from '../views/CountryView.vue'
import FavouriteCountriesView from '../views/FavouriteCountriesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/name/:id',
      name: 'CountryView',
      component: CountryView,
      props: true
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: FavouriteCountriesView
    }
  ]
})

export default router