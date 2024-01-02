<template>
  <div id="app">
    <router-view />
    <div id="linker">
      <!-- Use router-link for navigation -->
      <button @click="goToDashboard">Go to Dashboard</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

  methods: {
    goToDashboard() {
      // Use Vue Router's programmatic navigation
      this.$router.push('/dashboard');
    },
  },
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