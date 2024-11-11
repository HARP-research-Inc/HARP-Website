<script>
import GetStarted from "./GetStarted.vue";

export default {
  components: { GetStarted },
  data() {
    return {
      showProductsDropdown: false,
    };
  },
  methods: {
    toggleProductsDropdown() {
      this.showProductsDropdown = !this.showProductsDropdown;
    },
  },
};
</script>

<template>
  <div>
    <nav>
      <div class="nav-left">
        <router-link class="navLink" to="/">
          <img
            src="../assets/assets/HARP Logo Shirt Res.svg"
            alt="HARP Logo"
            class="logo"
          />
        </router-link>
        <router-link class="navLink" to="/about">About</router-link>
        <div class="navLink products" @click="toggleProductsDropdown">
          Products
          <div v-if="showProductsDropdown" class="dropdown">
            <router-link class="dropdown-link" to="/products"
              >ViewPoint</router-link
            >
            <router-link class="dropdown-link" to="/products/product2"
              >Product 2</router-link
            >
            <router-link class="dropdown-link" to="/products/product3"
              >Product 3</router-link
            >
          </div>
        </div>
        <router-link class="navLink" to="/projects">Projects</router-link>
        <router-link class="navLink" to="/articles">Articles</router-link>
      </div>
      <div class="nav-right">
        <router-link class="navLink" to="/contact">Contact Us</router-link>
        <router-link class="navLink" to="/login">
          <get-started></get-started>
        </router-link>
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
  position: relative;
  cursor: pointer;
}
.logo {
  width: 5em;
  margin: 1em;
}
.dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  background-color: #222;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translate(-50%, 10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  font-size: 1em;
  z-index: 1000;
}
.products:hover .dropdown {
  opacity: 1;
  transform: translate(-50%, 0);
}

.dropdown-link {
  color: white;
  text-decoration: none;
  padding: 12px 20px;
  font-size: 1em;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 4px;
}

.dropdown-link:hover {
  background-color: rgba(16, 71, 190, 0.1);
  color: rgba(16, 71, 190);
}
</style>
