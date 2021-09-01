import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Team from '../views/Team.vue'
import Basket from '../views/Basket.vue'
import Product from '../views/Product.vue'
import Add from '../views/Add.vue'
import Edit from '../views/Edit.vue'
import EditProfile from '../views/EditProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/editProfile',
    name: 'EditProfile',
    component: EditProfile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
