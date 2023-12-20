<script setup>
import { ref, computed } from 'vue'
import HomePage from "./components/HomePage.vue";
import DashHome from "./components/DashHome.vue";

const routes = {
  '/': HomePage,
  '/dashboard': DashHome
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>
  <div id="app">
    <component :is="currentView" />
    <div id="linker">
      <a id="linker" href="#/dashboard">Go to Dashboard</a>
    </div>
  </div>
</template>

<script>

 
export default {
  name: 'App',
  components: {
    HomePage,
    DashHome
  }
};
</script>

<style>

#linker {
  width: 100%;
  height: 100px;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-size: 45;
  text-align: center;
  padding-top: 2.5%;
}

</style>