<template>
    <div class= "member"> 
        <div class="member-card">
            <div class="card front">
                <div class= "member-box"></div>
                
            </div>
            <div class="card back">
                <div class= "member-box"></div>
                <!-- <a href=""><img src="" alt=""></a> -->
                <h4 class="member-github">{{ member.github }}</h4> 
                <h5 class="member-linkedin">{{ member.linkedin }}</h5> 
           </div>
        </div>
        <h4 class="member-name">{{ member.name }}</h4> 
        <h5 class="member-role">{{ member.role }}</h5> 
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    member: {
        type: Object,
        required: true,
    },
});

</script>

<style lang="css" scoped>
    .member{
        margin-bottom: 3%;
        margin-top: 3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        perspective: 1000px;
    }
    /* .member-box{
        width: 15rem;
        height: 15rem;  
        border-radius: 10%;
        background: linear-gradient(to bottom, #54204d 0%,#7db9e8 100%);
        transition: transform 0.6s; 
        transform-style: preserve-3d;
    } */
    .member-card {
        width: 15rem;
        height: 15rem;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.6s;
    }

    .card {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10%;
        padding: 1rem;
        color: white;
    }
    
    .front {
        background: linear-gradient(to bottom, #54204d 0%, #7db9e8 100%);
    }

    .back {
        background: #7db9e8;
        transform: rotateY(-180deg);
        color: black;
    }

    .member-card:hover {
        transform: rotateY(-180deg);
    }
 
</style>