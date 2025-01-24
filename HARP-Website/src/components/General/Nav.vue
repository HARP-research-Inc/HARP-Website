<script>
import GetStarted from "./GetStarted.vue";

export default {
  components: { GetStarted },
  data() {
    return {
      showProductsDropdown: false,
      isScrolled: false, 
    };
  },
  methods: {
    toggleProductsDropdown() {
      this.showProductsDropdown = !this.showProductsDropdown;
    },
    handleScroll() {
      this.isScrolled = window.scrollY >100;
    },
  },
  mounted() {
    // Add scroll event listener when component is mounted
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Clean up the event listener when component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<template>
  <div>
    <nav :class="{'scrolled': isScrolled}">
      <div class="nav-left">
        <router-link class="navLink" to="/">
          <img
            src="../../assets/HARPResearchLockUps/LogoLockups/HARP Logo Shirt Res.svg"
            alt="HARP Logo"
            class="logo"
          />
        </router-link>
        <router-link class="navLink" to="/about">About</router-link>
        <div class="navLink products" @click="toggleProductsDropdown">
          Products
          <div v-if="showProductsDropdown" class="dropdown">
            <router-link class="dropdown-link" to="/viewpoint"
              >ViewPoint</router-link
            >
          </div>
        </div>
        <!-- <router-link class="navLink" to="/projects">Projects</router-link>
        <router-link class="navLink" to="/articles">Articles</router-link> -->
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
/* Base nav styles */
nav {
  width: 100%; 
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 1% 5%;
  background-color: transparent;
  z-index: 1000;
  text-decoration: none;
  align-items: center;
  font-size: 1.5em;
  box-sizing: border-box; /* Include padding in width calculations */
  transition: background-color 0.3s ease; /* Smooth background-color transition */
  /* overflow: hidden;  */
}

nav.scrolled {
  background-color: rgba(0, 0, 0, 0.8);
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px; /* Reduced gap for smaller screens */
}

.navLink {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 1em; 
  cursor: pointer;
}

.logo {
  width: 5em; 
  margin: 0.5em;
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
  font-size: 0.9em; /* Adjust dropdown font size */
  z-index: 1000;
}

.products:hover .dropdown {
  opacity: 1;
  transform: translate(-50%, 0);
}

.dropdown-link {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 0.9em; 
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 4px;
}

.dropdown-link:hover {
  background-color: rgba(16, 71, 190, 0.1);
  color: rgba(16, 71, 190);
}


@media (min-width: 320px) and (max-width: 768px) {
  nav {
    flex-direction: row;
    padding: 1.5% 5%;
    font-size: .75em;
    justify-content: space-between;
    align-items: center;
  }

  .nav-left,
  .nav-right {
    flex-direction: row;
    gap: 20px;
  }

  .logo {
    width: 3em; 
  }

  .dropdown-link {
    font-size: 0.9em; 
  }
  .dropdown{
    top: 70%;
    left: 23%;
  }
}

/* Larger screens (769px and up) */
@media (min-width: 769px) {
  nav {
    padding: 1% 5%;
    font-size: 1.5em;
  }

  .nav-left,
  .nav-right {
    gap: 30px;
  }

  .logo {
    width: 5em;
  }
}
</style>

