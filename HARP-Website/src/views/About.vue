<template>
    <div class="About">
        <Header 
            title="About"
            subtitle="We deliver next-gen AI solutions that drive innovation and unlock new possibilities"  
            />
        <div class="values">
            <div class="values-img">
                <img src="../assets/team.webp" alt="team photo">
                <img src="../assets/team.webp" alt="team photo">
            </div>
            <div class="values-text">
                <h5>Our Values</h5>
                <h3>Meet Harp Research</h3>
                <h3>Pioneers.</h3>
                <h3>Innovative.</h3>
                <h3>Polymorphic.</h3>
                <h6>Join a team where diverse talents from various fields, including leading researchers and core innovators, come together to push the boundaries of what's possible.</h6>
            </div>
           

        </div>
        <div class="mission">
            <div class="mission-text">
                <h5>Our Story and Mission</h5>
                <h3>Accessible automation tools creating value for everyone</h3>
                <h6>After years of developing our virtual lithography technology, we refocused our efforts on AI. After testing our framework developing software tools for the FDA's Summer Food Service Program, we began developing the Simplified Semantic System Synthesis Framework, or S4, our proprietary polymorphic AI language, built from the ground up for planning. From here, HARP research hopes to expand its capabilities, allowing anyone to create anything.</h6>
            </div>
           
            <div class="mission-img">
                <img src="../assets/team.webp" alt="team photo">
            </div>
        </div>
        <div class="team">
            <h1 class="team-header">Meet the team</h1>
            <h2 class="team-foundersHeader">Founders</h2>
            <div class="team-foundersCards">
                <TeamMember v-for="member in TeamMembers.filter(member=> member.founder)" :key="member.id" :member="member" />
            </div>
            <h2 class="team-membersHeader">Spring 2025</h2>
            <div class="team-membersCards">
                <TeamMember v-for="member in TeamMembers.filter(member=> !member.founder)" :key="member.id" :member="member" />
            </div>
        </div>
    </div>
</template>

<script setup>
import TeamMember from '@/components/TeamMemberCard.vue';
import Header from '@/components/Header.vue';

const TeamMembers= [
    { id: 1, name: "Harper Chisari", role: "Cheif Executive Officer", founder: true, github:"https://github.com/dashboard" , linkedin:"https://www.linkedin.com/feed/" },
    { id: 2, name: "Kevin Scott", role: "Chief Technical Officer", founder: true, github:"https://github.com/dashboard" , linkedin:"https://www.linkedin.com/feed/" },
    { id: 3, name: "Harper Chisari", role: "Cheif Executive Officer", founder: true, github:"https://github.com/dashboard" , linkedin:"https://www.linkedin.com/feed/"},
    { id: 4, name: "Harper Chisari", role: "Cheif Executive Officer", founder: true, github:"https://github.com/dashboard" , linkedin:"https://www.linkedin.com/feed/"},
    { id: 5, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false, semester: "Spring 2025", github:"https://github.com/dashboard" , linkedin:"https://www.linkedin.com/feed/"},
    { id: 6, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false, semester: "Fall 2024", github:"https://github.com/dashboard" , linkedin:"https://www.linkedin.com/feed/"},
    { id: 7, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false, semester: "Spring 2025", github:"https://github.com/dashboard" , linkedin:"https://www.linkedin.com/feed/"},
    { id: 8, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false, semester: "Spring 2025", github:"https://github.com/dashboard" , linkedin:"https://www.linkedin.com/feed/"},
    { id: 9, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false, semester: "Spring 2025", github:"https://github.com/dashboard" , linkedin:"https://www.linkedin.com/feed/"},
    { id: 10, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false, semester: "Spring 2025", github:"https://github.com/dashboard" , linkedin:"https://www.linkedin.com/feed/"},
    { id: 11, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false, semester: "Fall 2024", github:"https://github.com/dashboard" , linkedin:"https://www.linkedin.com/feed/"},
    { id: 12, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false, semester: "Fall 2024", github:"https://github.com/dashboard" , linkedin:"https://www.linkedin.com/feed/"},
]


</script>

<style lang="css" scoped>
    
    .team{
        margin-top: 4rem;
        margin-right: 8rem;
        margin-left: 8rem;
    }
    .team-foundersCards,
    .team-membersCards{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex: 1 1 22%;
        gap: 2%;
    }
    .values,
    .mission{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 4rem 8rem;
        flex-wrap: wrap;
        max-width: 90%;
    }
    img{
        border-radius: 10%;
    }

    .values-img {
        position: relative;
        display: flex;
    }

    .values-img img {
        width: 300px; 
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }

    .values-img img:first-child {
        position: relative;
        z-index: 2;
        margin-right: -150px;
    }

    .values-img img:last-child {
        position: relative;
        z-index: 1;
        transform: translateX(-50px); 
    }

    .values-text {
        text-align: left;
        padding: 1rem;
        flex: 1;
    }
    .mission-text{
        flex: 1;
    }
    .mission-img{
        flex: 1;
    }

</style>