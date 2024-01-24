import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '../views/GalleryView.vue'
import DonutsView from '../views/DonutsView.vue'
import ContactsView from '../views/ContactsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: GalleryView,
    },
    {
      path: '/Donuts',
      name: 'Donuts',
      component: DonutsView,
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: ContactsView,
    }
    // {
    //   path: '/about',.
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
