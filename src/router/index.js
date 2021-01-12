import Vue from 'vue'
import VueRouter from 'vue-router'
import CountryList from '../views/CountryList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CountryList',
    component: CountryList
  },
  {
    path: '/country/:id',
    name: 'country',
    component: () => import('../views/CountryDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
