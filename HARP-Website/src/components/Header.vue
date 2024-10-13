<template>
    <div class="header">
        <h1>{{ title }}</h1>
        <h3>{{ subtitle }}</h3>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: {
        type: String
    },
    subtitle: {
        type: String
    }
})
</script>

<style lang="css" scoped>
    .header{
        position: relative;
        background-color: aquamarine;
        height: 30rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
    .header h3{
        margin: 2rem;
    }
</style>