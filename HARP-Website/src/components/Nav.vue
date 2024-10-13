<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/articles">Articles</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/login">Get Started</router-link>
        </nav>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
nav {
  display: flex;
  justify-content: space-between; 
  padding: 10px 20px;
  background-color: transparent;
  z-index: 10;

}

</style>