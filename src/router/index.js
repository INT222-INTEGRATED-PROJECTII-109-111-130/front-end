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
    meta: {
      auth: true,
    }
    // props:true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    ,props:true
    ,
    meta: {
      auth: true,
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
    ,props:true
    ,
    meta: {
      auth: true
    }
  },
  {
    path: '/basket/:accid',
    name: 'Basket',
    component: Basket
    ,props:true
    ,
    meta: {
      auth: true
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
    ,props:true
    ,
    meta: {
      auth: true
    }
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
    ,props:true
    ,
    meta: {
      auth: true
    }
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
    ,props:true
    ,
    meta: {
      auth: true
    }
  },
  {
    path: '/editProfile',
    name: 'EditProfile',
    component: EditProfile
    ,props:true
    ,
    meta: {
      auth: true
    }
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage
    ,props:true
    ,
    meta: {
      auth: true
    }
  },
  {
    path: '/manageUser',
    name: 'ManageUser',
    component: ManageUser
    ,props:true
    ,
    meta: {
      auth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
