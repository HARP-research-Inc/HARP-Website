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
  title:{
    type: String,
    required: true
  }
});

const currentIndex = ref(0);
const itemsToShow = 5; 

function scrollCarousel(direction) {
  const totalItems = props.items.length;
  const maxIndex = totalItems - itemsToShow;
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
  margin-bottom: 8rem;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 1rem;
}

.carousel-item {
  min-width: calc(100% / 5); 
  box-sizing: border-box;
  padding: 10px;
}
.carousel-header{
  color: white;
  font-weight: bold;
  margin: 0;
}

.scroll-buttons {
  display: flex;
  gap: 10px;
}

.scroll-button {
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
}
</style>
