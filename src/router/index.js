import Vue from 'vue'
import VueRouter from 'vue-router'
import CountryList from '../views/CountryList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CountryList',
    component: CountryList,
    meta: {
      title: () => 'Countries'
    }
  },
  {
    path: '/country/:country',
    name: 'CountryDetail',
    component: () => import('../views/CountryDetail.vue'),
    meta: {
      title: (route) => route.params.country
    },
    props: route => ({
      countryName: route.params.country
    })
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const DEFAULT_TITLE = 'Countries Listing';

router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    document.title = `${to.meta.title(to)} | ${DEFAULT_TITLE}` || DEFAULT_TITLE;
  });
  
  next();
});

export default router
