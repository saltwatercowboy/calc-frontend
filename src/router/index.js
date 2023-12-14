import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  base: '/calc-frontend/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '*',
      name: 'catchAll',
      component: Home
   }
    
  ]
})

export default router;