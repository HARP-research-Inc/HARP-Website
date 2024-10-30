<template>
  <div>
    <TopStories></TopStories>
    <Explore />
    <StayInTheLoop />
    <Footer />
  </div>
</template>

<script>
import Explore from "../components/Explore.vue";
import StayInTheLoop from "../components/StayInTheLoop.vue";
import TopStories from "@/components/TopStories.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Explore, StayInTheLoop, TopStories, Footer },
};
</script>

<style scoped></style>
