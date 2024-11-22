<template>
    <div>
        <div class="contact">
        <h1>AAS Commercial Account</h1>
        <div class="cards">
            <ContactCard 
            :icon="singleIcon" 
            header1="Got questions?" 
            header2="We will answer questions you have about our technologies"
            buttonLabel="Contact" 
            gradientStart="#158bc2" 
            gradientEnd="#6788c8" 
            />
            <ContactCard 
            :icon="doubleIcon"
            header1="Partner with us!" 
            header2="We are always looking for new and exciting collaborations!"
            buttonLabel="Partner" 
            gradientStart="#1F1CD0" 
            gradientEnd="#AAB7D2" 
            />
        </div>
    </div>


    <Footer/>
    </div>
</template>

<script setup>
import ContactCard from '@/components/ContactCard.vue';
import Footer from '@/components/Footer.vue';
import singleIcon from '@/assets/singleIcon.png';
import doubleIcon from '@/assets/doubleIcon.png';


</script>

<style lang="css" scoped>
    h1 {
        padding-top: 10rem;
        color: white;
        font-weight: bold;
    }
    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        text-align: center;
        padding: 2rem; 
    }
    .cards {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap; 
        gap: 1rem;
        margin-top: 1rem; 
    }


</style>