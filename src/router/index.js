import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CennikView from '../views/CennikView.vue'
import KontaktView from '../views/KontaktView.vue'
import RejestracjaView from '../views/RejestracjaView.vue'
import RejestracjaView2 from '../views/RejestracjaView2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/cennik',
    name: 'cennik',
    component: CennikView
  },
  {
    path: '/kontakt',
    name: 'konakt',
    component: KontaktView
  },
  {
    path: '/rejestracja',
    name: 'rejestracja',
    component: RejestracjaView
  },
  {
    path: '/rejestracja2',
    name: 'rejestracja2',
    component: RejestracjaView2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
