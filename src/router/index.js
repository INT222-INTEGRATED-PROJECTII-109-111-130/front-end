import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Team from '../views/Team.vue'
import Basket from '../views/Basket.vue'
import Product from '../views/Product.vue'
import Add from '../views/Add.vue'
import Edit from '../views/Edit.vue'
import EditProfile from '../views/EditProfile.vue'
import Manage from '../views/Manage.vue'
import ManageUser from '../views/ManageUser.vue'

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
    path: '/basket/:accid',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/editProfile',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage
  },
  {
    path: '/manageUser',
    name: 'ManageUser',
    component: ManageUser
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
