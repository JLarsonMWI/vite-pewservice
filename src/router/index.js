import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/404.vue';
import Dashboard from '../views/Dashboard.vue';
import Documentation from '../views/Documentation.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
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
      name: 'Documentation',
      component: Documentation,
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
