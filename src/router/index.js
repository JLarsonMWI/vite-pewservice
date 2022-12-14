import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/404.vue';
import Dashboard from '../views/Dashboard.vue';
import Documentation from '../views/Documentation.vue';
import Pricing from '../views/Pricing.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        hideNavbar: true,
      },
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: Documentation,
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing,
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/:catchAll(.*)',
      redirect: '404',
    },
  ],
});

export default router;
