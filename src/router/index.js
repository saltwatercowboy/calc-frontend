import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import DashHome from '../components/DashHome.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/dashboard',
    component: DashHome,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;