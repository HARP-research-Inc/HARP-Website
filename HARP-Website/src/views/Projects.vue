<template>
    <div>
        <Header
            title="Projects"
            subtitle="We deliver next-gen AI solutions that drive innovation and unlock new possibilities"
        />
        <div class="openSource">
            <div class="header-row">
                <h2 class="openSource-header">Open Source</h2>
                <div class="scroll-buttons">
                    <button @click="scrollLeft(openSourceRef)" class="scroll-button">◀</button>
                    <button @click="scrollRight(openSourceRef)" class="scroll-button">▶</button>
                </div>
            </div>
            <div class="openSource-cards" ref="openSourceRef">
                <ProjectCard v-for="project in ProjectCards" :key="project.id" :project="project"/>
            </div>
        </div>
        <div class="research">
            <div class="header-row">
                <h2 class="research-header">Research</h2>
                <div class="scroll-buttons">
                    <button @click="scrollLeft(researchRef)" class="scroll-button">◀</button>
                    <button @click="scrollRight(researchRef)" class="scroll-button">▶</button>
                </div>
            </div>
            <div class="research-cards" ref="researchRef">
                <ProjectCard v-for="research in ResearchCards" :key="research.id" :project="research"/>
            </div>
        </div>
        <StayInTheLoop/>
    </div>
</template>


<script setup>
import { ref, nextTick} from 'vue';
import Header from '@/components/Header.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import StayInTheLoop from '@/components/StayInTheLoop.vue';

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

const openSourceRef = ref(null);
const researchRef = ref(null);


function scrollRight(containerRef) {
    nextTick(() => {
        console.log('Container Ref:', containerRef.value); // Debugging log
        if (containerRef.value) {
            containerRef.value.scrollBy({ left: 300, behavior: 'smooth' });
        } else {
            console.error('Container reference is undefined', containerRef);
        }
    });
}

function scrollLeft(containerRef) {
    nextTick(() => {
        console.log('Container Ref:', containerRef.value); // Debugging log
        if (containerRef.value) {
            containerRef.value.scrollBy({ left: -300, behavior: 'smooth' });
        } else {
            console.error('Container reference is undefined', containerRef);
        }
    });
}

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
        padding: 1rem 0; 
        max-width: 100%;
    }
    .openSource-header, 
    .research-header{
        color: white;
    }
    .header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .scroll-buttons {
        display: flex;
        gap: 0.5rem;
    }
    .scroll-button {
        background-color: #124188;
        color: white;
        border: none;
        padding: 0.5em;
        cursor: pointer;
        border-radius: 50%;
        font-size: 1.5rem;
    }

    .scroll-button:hover {
        background-color: #0056b3;
    }
</style>
