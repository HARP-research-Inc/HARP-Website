<template>
  <div class="post-card" @click="navigateToArticle">
    <img 
      :src="resolvedImageUrl" 
      alt="Article image" 
      class="post-image"  
    />
    <div class="post-info">
      <p class="post-date">{{ formatDate(date) }} • {{ read_time }}</p>
      <h3 class="post-title">{{ title }}</h3>
      <p class="post-intro">{{ intro }}</p>
      <button class="linkedin-btn">in</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  "Article ID": Number, 
  image_url: String,
  date: String,
  read_time: String,
  title: String,
  intro: String,
  link: String,
})

const resolvedImageUrl = computed(() => {
  return new URL(`../../../../assets/HARPResearchLockUps/Photos/${props.image_url.split('/').pop()}`, import.meta.url).href
})

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
}

const navigateToArticle = () => {
  if (props.link) {
    window.open(props.link, '_blank')
  }
}
</script>

<style scoped>
.post-card {
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: white;
  padding: 0 4em 1em 4em;
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.post-card:hover {
  transform: scale(1.03); /* Slight scale up on hover */
}

.post-card:hover .post-title {
  font-size: 2.1em; /* Slightly larger title on hover */
  transition: font-size 0.3s ease;
}

.post-image {
  width: 500px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1.5em;
  margin-left: 2em;
}

.post-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.post-date {
  font-size: 0.9em;
  color: #a0a8b8;
  margin-bottom: 0.5em;
}

.post-title {
  font-size: 2em;
  font-weight: bold;
  margin: 0.2em 0;
  line-height: 1.2em;
  color: #ffffff;
  width: 75%;
  padding: 0.25em 0 0.5em 0;
}

.post-intro {
  font-size: 1em;
  color: #c4c7d1;
  margin-bottom: 1em;
  line-height: 1.5em;
}

.linkedin-btn {
  background-color: #0077b5;
  color: white;
  padding: 0.3em 0.8em;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  align-self: start;
  margin-top: auto; /* Aligns button to the bottom of the text */
}
</style>
