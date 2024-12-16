<template>
  <router-link to="/about" class="about-us-button">
    <button class="blue-button">
      About Us
      <ArrowIcon />
    </button>
  </router-link>
</template>

<script>
import ArrowIcon from "../ArrowIcon.vue";

export default {
  components: {
    ArrowIcon,
  },
};
</script>

<style scoped>
.about-us-button {
  text-decoration: none;
}

.blue-button {
  background-color: #124188;
  color: white;
  border: none;
  padding: 0.75em 1em;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  border-radius: 2em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.blue-button:hover {
  background-color: #0056b3;
}

.blue-button svg {
  margin-left: 8px;
}
</style>
