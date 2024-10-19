<template>
    <div>
        <button> Hello</button>

    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
     button {
        background: #2d65ba; 
        padding: 0.5rem 2rem;
        border: none; 
        border-radius: 20%; 
        color: white; 
        font-size: 1rem; 
        transition: background 0.3s; 
    }

    button:hover {
        background: gray; /* Reverse the gradient on hover */
    }
</style>