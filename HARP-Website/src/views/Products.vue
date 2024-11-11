<script>
import Animation2 from "../components/Animation2.vue";
import AboutUsButton from "../components/AboutUsButton.vue";
import ProjectsButton from "../components/ProjectsButton.vue";
import Cube from "../components/Cube.vue";
import ProductsButton from "@/components/ProductsButton.vue";
import StayInTheLoop from "@/components/StayInTheLoop.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Animation2,
    AboutUsButton,
    ProjectsButton,
    Cube,
    ProductsButton,
    StayInTheLoop,
    Footer,
  },
  data() {
    return {
      features: [
        "The Excellent Spreadsheet Analysisorithm harnesses the power of polymorphic AI systems: a hybrid Synthetic-Symbolic Synthetic-Statistic Neural Networks which can modify its own structure and expand its won",
        "blah blah blah",
        "blah blah blah",
        "The Excellent Spreadsheet Analysisorithm harnesses the power of polymorphic AI systems: a hybrid Synthetic-Symbolic Synthetic-Statistic Neural Networks which can modify its own structure and expand its won",
        "blah blah blah",
        "The Excellent Spreadsheet Analysisorithm harnesses the power of polymorphic AI systems: a hybrid Synthetic-Symbolic Synthetic-Statistic Neural Networks which can modify its own structure and expand its won",
        "The Excellent Spreadsheet Analysisorithm harnesses the power of polymorphic AI systems: a hybrid Synthetic-Symbolic Synthetic-Statistic Neural Networks which can modify its own structure and expand its won",
        "The Excellent Spreadsheet Analysisorithm harnesses the power of polymorphic AI systems: a hybrid Synthetic-Symbolic Synthetic-Statistic Neural Networks which can modify its own structure and expand its won",
        "The Excellent Spreadsheet Analysisorithm harnesses the power of polymorphic AI systems: a hybrid Synthetic-Symbolic Synthetic-Statistic Neural Networks which can modify its own structure and expand its won",
        "blah blah blah",
        "blah blah blah",
        "The Excellent Spreadsheet Analysisorithm harnesses the power of polymorphic AI systems: a hybrid Synthetic-Symbolic Synthetic-Statistic Neural Networks which can modify its own structure and expand its won",
        "The Excellent Spreadsheet Analysisorithm harnesses the power of polymorphic AI systems: a hybrid Synthetic-Symbolic Synthetic-Statistic Neural Networks which can modify its own structure and expand its won",
        "The Excellent Spreadsheet Analysisorithm harnesses the power of polymorphic AI systems: a hybrid Synthetic-Symbolic Synthetic-Statistic Neural Networks which can modify its own structure and expand its won",
        "The Excellent Spreadsheet Analysisorithm harnesses the power of polymorphic AI systems: a hybrid Synthetic-Symbolic Synthetic-Statistic Neural Networks which can modify its own structure and expand its won",
        "blah blah blah",
      ],
      currentIndex: 0,
    };
  },
  computed: {
    visibleFeatures() {
      return this.features
        .slice(this.currentIndex, this.currentIndex + 5)
        .concat(
          this.features.slice(
            0,
            Math.max(0, this.currentIndex + 5 - this.features.length)
          )
        );
    },
  },
  mounted() {
    this.startCarousel();
  },
  beforeDestroy() {
    clearInterval(this.carouselInterval);
  },
  methods: {
    startCarousel() {
      this.carouselInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.features.length;
      }, 2000);
    },
  },
};
</script>

<template>
  <div>
    <Animation2 />
    <div class="container">
      <div class="content">
        <h1>A solution to parsing spreadsheets</h1>
        <div class="emphasis">
          <div class="vertical-line"></div>
          <div class="highlight">
            <p>Efficiency.</p>
            <p>Accuracy.</p>
            <p>Simplicity.</p>
          </div>
        </div>
        <p class="description">
          Our goal is to create business value by simplifying the transformation
          of complex, poorly formatted spreadsheets into a clear, tree-like
          table hierarchy.
        </p>
        <p class="description">
          Easy parsing and accurate interpretation of your data are no longer
          challenges, but strengths that drive your strategic business
          decisions.
        </p>
        <p class="description">
          Our algorithm is more than a tool; it's an investment for your
          business. As a fine-tuned Spreadsheet-to-Python polymorphic AI, it
          integrates seamlessly into your existing data analysis infrastructure,
          optimizing efficiency and unlocking potential for substantial cost
          savings in data processing.
        </p>
      </div>
      <div class="image-placeholder"></div>
    </div>

    <div class="carousel-container">
      <h2 class="features">Features</h2>
      <div class="carousel">
        <div
          v-for="(feature, index) in visibleFeatures"
          :key="index"
          class="feature-card"
        >
          <p>{{ feature }}</p>
        </div>
      </div>
    </div>

    <div class="container2">
      <div class="content">
        <h1>The Algorithm</h1>

        <p class="description">
          The Excellent Spreadsheet Analysis Algorithm harnesses the power of
          polymorphic AI systems: a hybrid Synthetic-Symbolic
          Synthetic-Statistic Neural Networks which can modify its own structure
          and expand its won
        </p>
        <p class="description">
          capabilities. This algorithm simplifies and accelerates spreadsheet
          parsing, drastically reducing computational demands, thus, reducing
          costs and delivering efficiency to your business. capabilities.
        </p>
        <p class="description">
          This algorithm simplifies and accelerates spreadsheet parsing,
          drastically reducing computational demands, thus, reducing costs and
          delivering efficiency to your business.
        </p>
      </div>
      <div class="image-placeholder"></div>
    </div>

    <div class="container3">
      <div class="images">
        <img src="../assets/Example1.webp" alt="img" />
        <img src="../assets/Example2.webp" alt="img" />
      </div>
      <div class="content3">
        <h1>The Algorithm</h1>

        <p class="description">
          The Excellent Spreadsheet Analysis Algorithm harnesses the power of
          polymorphic AI systems: a hybrid Synthetic-Symbolic
          Synthetic-Statistic Neural Networks which can modify its own structure
          and expand its won
        </p>
        <p class="description">
          capabilities. This algorithm simplifies and accelerates spreadsheet
          parsing, drastically reducing computational demands, thus, reducing
          costs and delivering efficiency to your business. capabilities.
        </p>
        <p class="description">
          This algorithm simplifies and accelerates spreadsheet parsing,
          drastically reducing computational demands, thus, reducing costs and
          delivering efficiency to your business.
        </p>
      </div>
    </div>

    <StayInTheLoop />
    <Footer />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  padding-left: 15%;
  padding-right: 15%;
  color: #ffffff;
  border-radius: 10px;
  z-index: 100000;
  margin-top: -10%;
  align-items: center;
}
.container2 {
  display: flex;
  padding-top: 5%;
  padding-left: 15%;
  padding-right: 15%;
  color: #ffffff;
  border-radius: 10px;
}
.container3 {
  display: flex;
  padding-top: 5%;
  padding-right: 15%;
  color: #ffffff;
  border-radius: 10px;
}

.content {
  flex: 1;
}
.content3 {
  text-align: right;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 1em;
}

.highlight {
  margin-top: 20px;
}

.highlight p {
  background: linear-gradient(
    270deg,
    rgb(119, 46, 168) 2%,
    rgba(100, 212, 210, 1) 80%,
    rgba(125, 173, 232, 1) 100%
  );
  font-size: 2.5em;
  margin-left: 0.2em;
  background-clip: text;
  color: transparent;
  font-weight: 700;
}

.description {
  margin-top: 1em;
  font-size: 1rem;
  line-height: 1.5;
}

.image-placeholder {
  width: 20em;
  height: 20em;
  background: linear-gradient(to bottom, #444, #222);
  border-radius: 10px;
  margin-left: 10em;
}

.vertical-line {
  width: 2px;
  height: 25vh;
  background-color: #4a4a4a;
}

.emphasis {
  display: flex;
  flex-direction: row;
  gap: 3em;
}

.features {
  color: #ffffff;
  font-weight: bold;
  font-size: 2em;
  text-align: left;
  padding: 1em 8em;
}

.carousel-container {
  width: 100%;
  text-align: center;
  margin-top: 40px;
}

.carousel {
  display: flex;
  justify-content: center;
}

.feature-card {
  width: 200px;
  height: 300px;
  background: linear-gradient(to bottom, #444, #222);
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  transition: transform 0.5s ease-in-out;
  margin: 0px 1em;
}
.images {
  position: relative;
  width: 30em;
  height: 10em;
  margin-bottom: 30rem;
  margin-right: 50em;
}

.images img {
  width: 30em;
  height: 20em;
  border-radius: 2em;
  object-fit: cover;
  position: absolute;
  margin: 5% 50% 50% 50%;
  transition: transform 0.3s ease;
}

.images img:nth-child(1) {
  top: 10em;
}

.images img:nth-child(2) {
  left: 20em;
}
.images img:nth-child(1):hover {
  transform: scale(1.2);
  z-index: 10;
}

.images img:nth-child(2):hover {
  transform: scale(1.2);
  z-index: 10;
}
</style>
