<template>
    <div>
        <div class="AAS">
        <h1>AAS Commercial Account</h1>
        <div class="cards">
            <ContactCard 
            :icon="singleIcon" 
            header1="New User" 
            header2="Sign up and explore our projects"
            buttonLabel="Sign Up" 
            gradientStart="#000000" 
            gradientEnd="#000000" 
            />
            <ContactCard 
            :icon="doubleIcon"
            header1="Existing User" 
            header2="Continue exploring our products"
            buttonLabel="Login" 
            gradientStart="#05245A" 
            gradientEnd="#05245A" 
            />
        </div>
    </div>
    </div>
</template>

<script setup>
import ContactCard from '@/components/ContactCard.vue';
import singleIcon from '@/assets/singleIcon.png';
import doubleIcon from '@/assets/doubleIcon.png';


</script>

<style lang="css" scoped>
    h1{
        padding-top: 8rem;
        color: white;
        font-weight: bold;
    }
    .AAS {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        text-align: center;
        padding: 2rem; 
        background: linear-gradient(to bottom, #124188, #FFFFFF); 
        min-height: 100vh; 
    }
    .cards{
        display: flex;
        justify-content: space-between;
    }


</style>