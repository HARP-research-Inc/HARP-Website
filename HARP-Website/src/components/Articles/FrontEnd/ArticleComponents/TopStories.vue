<template>
  <section class="top-stories">
    <div class="carousel">
      <div class="story" v-if="articles.length > 0">
        <div class="story-info">
          <p class="story-date">
            {{ formatDate(articles[currentStoryIndex].date) }} •
            {{ articles[currentStoryIndex].read_time }} 
          </p>
          <h2 class="story-title">{{ articles[currentStoryIndex].title }}</h2>
          <p class="story-intro">{{ articles[currentStoryIndex].intro }}</p>
        </div>
        <img
          :src="resolveImageUrl(articles[currentStoryIndex].image_url)" 
          alt="Story image"
          class="story-image"
        />
      </div>
      <div v-else>Loading...</div>
    </div>
    <div class="dots" v-if="articles.length > 0">
      <span
        v-for="(article, index) in articles"
        :key="index"
        :class="{ active: index === currentStoryIndex }"
        @click="changeStory(index)"
        >•
      </span>
    </div>
  </section>
</template>

<script>
import { articleAPI } from '../ArticlesAPI/ArticlesAPI.js';

export default {
  data() {
    return {
      articles: [],
      filteredArticles: [],
      articlesToShow: 3,
      loading: false,
      error: null,
      currentStoryIndex: 0,
      carouselInterval: null
    };
  },
  methods: {
    resolveImageUrl(imageUrl) {
      return new URL(`../../../../assets/HARPResearchLockUps/Photos/${imageUrl.split('/').pop()}`, import.meta.url).href
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
    },
    async fetchArticles() {
      this.loading = true;
      this.error = null;
      try {
        const articles = await articleAPI.getArticles();
        console.log('Fetched articles:', articles);
        this.articles = articles;
        this.filteredArticles = articles;
      } catch (error) {
        this.error = 'Failed to fetch articles. Please try again later.';
        console.error('Error:', error);
      } finally {
        this.loading = false;
      }
    },
    startCarousel() {
      this.stopCarousel();
      this.carouselInterval = setInterval(() => {
        this.currentStoryIndex = (this.currentStoryIndex + 1) % this.articles.length;
      }, 10000);
    },
    stopCarousel() {
      if (this.carouselInterval) {
        clearInterval(this.carouselInterval);
      }
    },
    changeStory(index) {
      this.currentStoryIndex = index;
      this.startCarousel();
    }
  },
  mounted() {
    this.fetchArticles().then(() => {
      if (this.articles.length > 0) {
        this.startCarousel();
      }
    });
  },
  beforeUnmount() {
    this.stopCarousel();
  }
};
</script>

<style scoped>
.top-stories {
  position: relative;
  text-align: center;
  top: 10em;
  display: flex;
  flex-direction: column;
}

.carousel {
  display: flex;
  overflow: hidden;
}

.story {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  transition: opacity 0.5s ease;
  padding: 2em;
  border-radius: 2em;
  justify-content: space-evenly;
}

.story.active {
  display: flex;
}

.story-image {
  width: 500px;
  height: 200px;
  object-fit: cover;
  margin-right: 1em;
  border-radius: 5px;
}

.story-info {
  color: white;
  text-align: left;
  max-width: 600px; /* Limits the width of the text */
  padding: 2em;
}

.story-date {
  font-size: 0.9em;
  color: #a0a8b8;
}

.story-title {
  font-size: 1.8em;
  font-weight: bold;
  margin: 0.2em 0;
}

.story-intro {
  font-size: 1em;
  color: #c4c7d1;
}

/* .dots {
  margin-top: 1rem;
} */

.dots span {
  font-size: 1rem;
  cursor: pointer;
  margin: 0 0.5rem;
  color: #ccc;
}

.dots span.active {
  color: #343333;
}
</style>
