<template>
  <div>
    <h1>Article Page</h1>
    <p>Article ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>
