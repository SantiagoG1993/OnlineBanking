import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView'
import IndexView from '../views/IndexView'

const routes = [
        {
          path:'/',
          component:LoginView
        },
        {
          path:'/index',
          component:IndexView
        }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
