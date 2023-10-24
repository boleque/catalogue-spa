import { createRouter, createWebHistory } from 'vue-router'
import ViewBooks from '../views/ViewBooks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewBooks
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/SaveBook.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/EditBook.vue')
    },
    {
      path: '/comments/:id',
      name: 'comments',
      component: () => import('../views/ViewBookComments.vue')
    }
  ]
})

export default router