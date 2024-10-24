<template>
    <div>
        <Header
            title="Projects"
            subtitle="We deliver next-gen AI solutions that drive innovation and unlock new possibilities"
        />
        <div class="openSource">
            <h2 class="openSource-header">Open Source</h2>
            <div class="openSource-cards">
                <ProjectCard v-for="project in ProjectCards" :key="project.id" :project="project"/>
            </div>
        </div>
        <div class="research">
            <h2 class="research-header">Research</h2>
            <div class="research-cards">
                <ProjectCard v-for="research in ResearchCards" :key="research.id" :project="research"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import ProjectCard from '@/components/ProjectCard.vue';
const ProjectCards = [
    {id: 1, name: "Vox Intuit(2024)"},
    {id: 2, name: "Vox Intuit(2024)"},
    {id: 3, name: "Vox Intuit(2024)"},
    {id: 4, name: "Vox Intuit(2024)"},
    {id: 5, name: "Vox Intuit(2024)"},
    {id: 6, name: "Vox Intuit(2024)"},
]
const ResearchCards = [
    {id: 1, name: "Vox Intuit(2024)"},
    {id: 2, name: "Vox Intuit(2024)"},
    {id: 3, name: "Vox Intuit(2024)"},
    {id: 4, name: "Vox Intuit(2024)"},
    {id: 5, name: "Vox Intuit(2024)"},
    {id: 6, name: "Vox Intuit(2024)"},
]

</script>

<style lang="css" scoped>
    .openSource,
    .research{
        margin-top: 4rem;
        margin-right: 8rem;
        margin-left: 8rem;
    }
    .openSource-cards,
    .research-cards{
        display: flex;
        justify-content: flex-start; 
        overflow-x: auto; 
        white-space: nowrap;
        flex: 1 1 20%;
        gap: 3%;
     
    }
</style>
