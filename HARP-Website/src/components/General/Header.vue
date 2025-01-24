<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
});
</script>

<style lang="css" scoped>
.header {
  position: relative;
  background-image: url("@/assets/HARPResearchLockUps/Photos/prometheus.webp");
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: white;
  z-index: 10;
  box-shadow: 2em black;
}
.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.header h1 {
  font-weight: bold;
  font-size: 2rem;
  z-index: 3;
}
.header h3 {
  margin: 2rem;
  font-size: 1.5rem;
  z-index: 3;
}
@media (min-width: 320px) and (max-width: 768px) {
.header {
  height: 20rem;  
  background-size: cover;
}
.header::before {
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.header h1 {
  font-weight: bold;
  font-size: 1rem;
}
.header h3 {
  margin: 2rem;
  font-size: .75rem;
}

}
</style>
