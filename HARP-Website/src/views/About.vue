<template>
    <div class="About">
        <Header 
            title="About"
            subtitle="We deliver next-gen AI solutions that drive innovation and unlock new possibilities"  
            />
        
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

</style>