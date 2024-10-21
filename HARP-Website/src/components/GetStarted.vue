<template>
  <button class="get-started-btn">Get Started</button>
</template>

<script>
export default {
  name: "GetStarted",
};
</script>

<style scoped>
.get-started-btn {
  background: rgb(18, 65, 136);
  background: linear-gradient(
    90deg,
    rgba(18, 65, 136, 1) 0%,
    rgba(67, 164, 229, 1) 100%
  );
  border: none;
  padding: 1em 2em;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 2em;
  color: white;
}

.get-started-btn:hover {
  background-color: #add8e6;
}
</style>
