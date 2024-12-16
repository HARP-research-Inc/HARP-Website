<template>
  <div class="Projects">
    <Header
      title="Projects"
      subtitle="We deliver next-gen AI solutions that drive innovation and unlock new possibilities"
    />

    <div class="openSource">
      <div class="openSource-carousel">
        <Carousel :items="ProjectCards" title="Open Source" />
      </div>
    </div>

    <div class="research">
      <div class="research-carousel">
        <Carousel :items="ResearchCards" title="Research" />
      </div>
    </div>

    <StayInTheLoop />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/General/Header.vue";
import ProjectCard from "@/components/Projects/ProjectCard.vue";
import StayInTheLoop from "@/components/General/StayInTheLoop.vue";
import Footer from "@/components/General/Footer.vue";
import Carousel from "@/components/Projects/Carousel.vue";

const ProjectCards = [
  { id: 1, name: "Vox Intuit(2024)", link: "/open-source-project" },
  { id: 2, name: "Vox Intuit(2024)", link: "/open-source-project" },
  { id: 3, name: "Vox Intuit(2024)", link: "/open-source-project" },
  { id: 4, name: "Vox Intuit(2024)", link: "/open-source-project" },
  { id: 5, name: "Vox Intuit(2024)", link: "/open-source-project" },
  { id: 6, name: "Vox Intuit(2024)", link: "/open-source-project" },
];
const ResearchCards = [
  { id: 1, name: "Vox Intuit(2024)", link: "/research-project" },
  { id: 2, name: "Vox Intuit(2024)", link: "/research-project" },
  { id: 3, name: "Vox Intuit(2024)", link: "/research-project" },
  { id: 4, name: "Vox Intuit(2024)", link: "/research-project" },
  { id: 5, name: "Vox Intuit(2024)", link: "/research-project" },
  { id: 6, name: "Vox Intuit(2024)", link: "/research-project" },
];
</script>

<style lang="css" scoped>
.openSource-carousel {
  margin-top: 5rem;
}
.openSource-header,
.research-header {
  margin-top: 4rem;
  margin-right: 8rem;
  margin-left: 8rem;
  color: white;
}
.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
