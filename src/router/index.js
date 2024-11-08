import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeesView from '@/views/EmployeesView.vue'
import { useAuthStore } from '@/store/useAuthStore'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 {
  path: '/employees',
  name: 'employees',
  meta: {
    requiresAuth: true
  },
  component: EmployeesView,
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to) => {
const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
   return {
     path: '/',
     query: { redirect: to.fullPath}
   }
  }
})

export default router
