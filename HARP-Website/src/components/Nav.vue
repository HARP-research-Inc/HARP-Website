<script>
import GetStarted from "./GetStarted.vue";

export default {
  components: { GetStarted },
};
</script>

<template>
  <div>
    <nav>
      <div class="nav-left">
        <router-link class="navLink" to="/"
          ><img
            src="../assets/assets/HARP Logo Shirt Res.svg"
            alt="HARP Logo"
            class="logo"
        /></router-link>
        <router-link class="navLink" to="/about">About</router-link>
        <router-link class="navLink" to="/products">Products</router-link>
        <router-link class="navLink" to="/projects">Projects</router-link>
        <router-link class="navLink" to="/articles">Articles</router-link>
      </div>
      <div class="nav-right">
        <router-link class="navLink" to="/contact">Contact Us</router-link>
        <router-link class="navLink" to="/login"
          ><get-started></get-started
        ></router-link>
      </div>
    </nav>
  </div>
</template>

<style lang="css" scoped>
nav {
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 2% 5% 0% 5%;
  background-color: transparent;
  z-index: 1000;
  text-decoration: none;
  align-items: center;
  font-size: 1.2rem;
}
.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 50px;
}
.navLink {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
.logo {
  width: 5em;
  margin: 1em;
}
</style>
