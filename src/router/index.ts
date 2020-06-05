import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'
import Floor from '../views/floor/index.vue'
import NavLink from '../views/NavLink/index.vue'
import ShoppingCart from '../views/ShoppingCart/index.vue'
import WorthBuy from '../views/WorthBuy/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/floor',
    component: Floor,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/navlink',
    component: NavLink,
  },
  {
    path: '/shoppingcart',
    component: ShoppingCart,
  },
  {
    path: '/worthbuy',
    component: WorthBuy,
  },
  {
    path: '/',
    // component:Home,
    redirect: '/',
  },
]

const router = new VueRouter({
  mode:'history',
  routes,
})

export default router
