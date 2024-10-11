<template>
    <div>
        <h1>About</h1>
        <div class="Team">
            <TeamMember/>
        </div>
    </div>
</template>

<script setup>
import TeamMember from '@/components/TeamMember.vue';

const TeamMembers= [
    { id: 1, name: "Harper Chisari", role: "Cheif Executive Officer", founder: true},
    { id: 1, name: "Harper Chisari", role: "Cheif Executive Officer", founder: true},
    { id: 1, name: "Harper Chisari", role: "Cheif Executive Officer", founder: true},
    { id: 1, name: "Harper Chisari", role: "Cheif Executive Officer", founder: true},
    { id: 1, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false},
    { id: 1, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false},
    { id: 1, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false},
    { id: 1, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false},
    { id: 1, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false},
    { id: 1, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false},
    { id: 1, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false},
    { id: 1, name: "Harper Chisari", role: "Cheif Executive Officer", founder: false},
]


</script>

<style lang="css" scoped>

</style>