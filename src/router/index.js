import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeesView from '@/views/EmployeesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 {
  path: '/employees',
  name: 'employees',
  component: EmployeesView,
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
