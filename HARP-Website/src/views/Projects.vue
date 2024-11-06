<template>
    <div class="Projects">
        <Header
            title="Projects"
            subtitle="We deliver next-gen AI solutions that drive innovation and unlock new possibilities"
        />
        
        
        <div class="openSource">
            <h2 class="openSource-header">Open Source</h2>
            <div class="openSource-carousel">
                <Carousel :items="ProjectCards" />
            </div>
        </div>

        <div class="research">
            <h2 class="research-header">Research Papers</h2>
            <div class="research-carousel">
                <Carousel :items="ResearchCards" />
            </div>
        </div>

        <StayInTheLoop/>
        <Footer/>
    </div>
</template>


<script setup>
import Header from '@/components/Header.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import StayInTheLoop from '@/components/StayInTheLoop.vue';
import Footer from '@/components/Footer.vue';
import Carousel from '@/components/Carousel.vue';

const ProjectCards = [
    {id: 1, name: "Vox Intuit(2024)", link: "/open-source-project"},
    {id: 2, name: "Vox Intuit(2024)", link: "/open-source-project"},
    {id: 3, name: "Vox Intuit(2024)", link: "/open-source-project"},
    {id: 4, name: "Vox Intuit(2024)", link: "/open-source-project"},
    {id: 5, name: "Vox Intuit(2024)", link: "/open-source-project"},
    {id: 6, name: "Vox Intuit(2024)", link: "/open-source-project"},
]
const ResearchCards = [
    {id: 1, name: "Vox Intuit(2024)", link: "/research-project"},
    {id: 2, name: "Vox Intuit(2024)", link: "/research-project"},
    {id: 3, name: "Vox Intuit(2024)", link: "/research-project"},
    {id: 4, name: "Vox Intuit(2024)", link: "/research-project"},
    {id: 5, name: "Vox Intuit(2024)", link: "/research-project"},
    {id: 6, name: "Vox Intuit(2024)", link: "/research-project"},
]

</script>

<style lang="css" scoped>
    .openSource-carousel{
        margin-top: 5rem;
    }
    .openSource-header,
    .research-header{
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
