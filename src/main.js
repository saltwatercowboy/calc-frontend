import Vue from 'vue';
import App from './App.vue';
import router from './router'; // If using Vue Router

Vue.config.productionTip = false;

new Vue({
  router, // If using Vue Router
  render: h => h(App),
}).$mount('#app');