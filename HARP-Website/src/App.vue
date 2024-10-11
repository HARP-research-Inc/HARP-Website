<script setup>
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Nav from "./components/Nav.vue";
</script>

<template>
  <header>
   <Nav/>
  </header>

  <main>
    <router-view></router-view>

  </main>

</template>

<style lang="css" scoped>

</style>
