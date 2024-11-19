<template>
  <div class="carousel-container">
    <div class="header-row">
      <h2 class="carousel-header">{{ title }}</h2>
      <div class="scroll-buttons">
        <button class="scroll-button" @click="scrollCarousel(-1)">❮</button>
        <button class="scroll-button" @click="scrollCarousel(1)">❯</button>
      </div>
    </div>
    <div class="carousel" :style="{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }">
      <div class="carousel-item" v-for="(item, index) in items" :key="index">
        <ProjectCard :project="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const currentIndex = ref(0);
const itemsToShow = ref(5); // Default number of items to display at a time

// Scroll the carousel in the given direction (-1 for left, 1 for right)
function scrollCarousel(direction) {
  const totalItems = props.items.length;
  const maxIndex = Math.ceil(totalItems / itemsToShow.value) - 1;
  if (direction === 1) {
    currentIndex.value = currentIndex.value < maxIndex ? currentIndex.value + 1 : 0;
  } else {
    currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : maxIndex;
  }
}
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 85%;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 6rem;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
  gap: 1rem; /* Add a gap between items */
}

.carousel-item {
  min-width: calc(100% / 5); /* Default: show 5 items */
  box-sizing: border-box;
  padding: 10px;
}

.scroll-buttons {
  position: absolute;
  top: 10px;
  right: 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  z-index: 10;
  transform: translateY(-50%);
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 1rem;
}

.carousel-header {
  color: white;
  font-weight: bold;
  margin: 0;
}

.scroll-button {
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
}

/* Media Queries for responsiveness */
@media (max-width: 1200px) {
  .carousel{
    gap: 3rem;
  }
  .carousel-item {
    min-width: calc(100% / 4); /* Show 4 items on large tablets */
  }
}

@media (max-width: 992px) {
  .carousel{
    gap: 4rem;
  }
  .carousel-item {
    min-width: calc(100% / 3); /* Show 3 items on medium tablets */
  }
}

@media (max-width: 768px) {
  .carousel{
    gap: 4rem;
  }
  .carousel-item {
    min-width: calc(100% / 2); /* Show 2 items on smaller tablets */
  }
}

@media (max-width: 480px) {
  .carousel{
    gap: 4rem;
  }
  .carousel-item {
    min-width: 100%; /* Show 1 item per row on mobile */
  }
  .scroll-buttons {
    top: 30px; /* Adjust buttons position on small screens */
  }
}
</style>
