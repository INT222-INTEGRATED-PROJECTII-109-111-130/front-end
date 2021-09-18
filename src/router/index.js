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
    component: Home,
    props:true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    ,props:true
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
    ,props:true
  },
  {
    path: '/basket/:accid',
    name: 'Basket',
    component: Basket
    ,props:true
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
    ,props:true
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
    ,props:true
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
    ,props:true
  },
  {
    path: '/editProfile',
    name: 'EditProfile',
    component: EditProfile
    ,props:true
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage
    ,props:true
  },
  {
    path: '/manageUser',
    name: 'ManageUser',
    component: ManageUser
    ,props:true
  },
]

const router = createRouter({
  
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
