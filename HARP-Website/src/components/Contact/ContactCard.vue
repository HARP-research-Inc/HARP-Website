<template>
  <div class="card" :style="cardStyle">
    <img :src="icon" :alt="iconAlt" />
    <h2>{{ header1 }}</h2>
    <h4>{{ header2 }}</h4>
    <GradientButton class="button" :label="buttonLabel" @click="openModal" />
  </div>
</template>

<script setup>
import GradientButton from "../Buttons/GradientButton.vue";
import { computed, defineEmits } from "vue";
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  header1: {
    type: String,
    required: true,
  },
  header2: {
    type: String,
    required: true,
  },
  buttonLabel: {
    type: String,
    required: true,
  },
  iconAlt: {
    type: String,
    default: "Technology icon",
  },
  gradientStart: {
    type: String,
    default: "rgb(21,139,194)",
  },
  gradientEnd: {
    type: String,
    default: "rgba(103,136,200,1)",
  },
});

const emit = defineEmits(["open-modal"]);
const openModal = () => {
  emit("open-modal");
};

const cardStyle = computed(() => {
  return {
    background: `linear-gradient(301deg, ${props.gradientStart} 0%, ${props.gradientEnd} 100%)`,
  };
});
</script>

<style lang="css" scoped>
.card {
  background: rgb(21, 139, 194);
  background: linear-gradient(
    301deg,
    rgba(21, 139, 194, 1) 0%,
    rgba(103, 136, 200, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  height: 28rem;
  width: 23rem;
  border-radius: 10%;
  margin: 5rem;
}
h2 {
  font-weight: bold;
  margin-bottom: 1rem;
}
h4 {
  margin-bottom: 3rem;
}
.button {
  width: 80%;
}
</style>
