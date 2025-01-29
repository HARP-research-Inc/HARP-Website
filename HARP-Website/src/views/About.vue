<template>
  <div class="About">
    <Header
      title="About"
      subtitle="We deliver next-gen AI solutions that drive innovation and unlock new possibilities"
    />
    <div class="values">
      <div class="values-img">
        <img
          src="../assets/HARPResearchLockUps/Photos/team.webp"
          alt="team photo"
        />
        <img
          src="../assets/HARPResearchLockUps/Photos/team.webp"
          alt="team photo"
        />
      </div>
      <div class="values-text">
        <h5>Our Values</h5>
        <h2>Meet Harp Research</h2>
        <div class="gradient-text">
          <h2 class="gradient one">Pioneers.</h2>
          <h2 class="gradient two">Innovative.</h2>
          <h2 class="gradient three">Polymorphic.</h2>
        </div>
        <h6 id="valuetext">
          Join a team where diverse talents from various fields, including
          leading researchers and core innovators, come together to push the
          boundaries of what's possible.
        </h6>
      </div>
    </div>
    <div class="mission">
      <div class="mission-text">
        <h5>Our Story and Mission</h5>
        <h2>
          Accessible automation tools creating value for <br />
          <span class="everyone">everyone</span>
        </h2>
        <h6 id="valuetext">
          After years of developing our virtual lithography technology, we
          refocused our efforts on AI. After testing our framework developing
          software tools for the FDA's Summer Food Service Program, we began
          developing the Simplified Semantic System Synthesis Framework, or S4,
          our proprietary polymorphic AI language, built from the ground up for
          planning. From here, HARP research hopes to expand its capabilities,
          allowing anyone to create anything.
        </h6>
      </div>
      <div class="mission-img">
        <img
          src="../assets/HARPResearchLockUps/Photos/team.webp"
          alt="team photo"
        />
      </div>
    </div>
    <div class="team">
      <h1 class="team-header">Meet the team</h1>
      <h2 class="team-foundersHeader">Founders & Management</h2>
      <div class="team-foundersCards">
        <TeamMember
          v-for="member in teamMembers.filter((member) => member.founder)"
          :key="member.id"
          :member="member"
        />
      </div>
      <h2 class="team-membersHeader">Team Members</h2>
      <div class="team-buttons">
        <GeneralButton label="View All" @click="updateFilter('all')" />
        <GeneralButton label="Developers" @click="updateFilter('Developer')" />
        <GeneralButton label="Researchers" @click="updateFilter('Researcher')" />
        <GeneralButton label="Fall 2024" @click="updateFilter('Fall 2024')" />
        <GeneralButton label="Spring 2025" @click="updateFilter('Spring 2025')" />
      </div>
      <div class="team-membersCards">
        <TeamMember
          v-for="member in filteredTeamMembers"
          :key="member.id"
          :member="member"
        />
      </div>
    </div>

    <div class="join">
      <div class="join-text">
        <h2>Join our team</h2>
        <p>
          After years of developing our virtual lithography technology, we
          refocused our efforts on AI. After testing our framework developing
          software tools for the FDA's Summer Food Service Program, we began
          developing the Simplified Semantic System Synthesis Framework, or S4,
          our proprietary polymorphic AI language, built from the ground up for
          planning. From here, HARP research hopes to expand its capabilities,
          allowing anyone to create anything.
        </p>
        <div class="button-wrapper">
          <CareersButton label="Careers" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import TeamMember from "@/components/About/Frontend/TeamMemberCard.vue";
import Header from "../components/General/Header.vue";
import GeneralButton from "@/components/About/Frontend/GeneralButton.vue";
import CareersButton from "@/components/About/Frontend/CareersButton.vue";
import Footer from "@/components/General/Footer.vue";
import axios from 'axios';

const selectedFilter = ref("all");
const teamMembers = ref([]);

const filteredTeamMembers = computed(() => {
  if (selectedFilter.value === "all") {
    return teamMembers.value.filter((member) => !member.founder);
  }
  if (selectedFilter.value === "Fall 2024" || selectedFilter.value === "Spring 2025") {
    return teamMembers.value.filter(
      (member) => !member.founder && member.semester === selectedFilter.value
    );
  }
  return teamMembers.value.filter(
    (member) => !member.founder && member.member_type === selectedFilter.value
  );
});

function updateFilter(filter) {
  selectedFilter.value = filter;
  fetchTeamMembers(); // Fetch team members based on the selected filter
}

async function fetchTeamMembers() {
  try {
    let url = 'http://localhost:3000/api/team-members';
    if (selectedFilter.value === 'Developer') {
      url = 'http://localhost:3000/api/team-members/developers';
    } else if (selectedFilter.value === 'Researcher') {
      url = 'http://localhost:3000/api/team-members/researchers';
    } else if (selectedFilter.value === 'Fall 2024' || selectedFilter.value === 'Spring 2025') {
      url = `http://localhost:3000/api/team-members?semester=${selectedFilter.value}`;
    }
    const response = await axios.get(url);
    teamMembers.value = response.data;
  } catch (error) {
    console.error('Error fetching team members:', error);
  }
}

onMounted(() => {
  fetchTeamMembers(); // Fetch all team members when the component is mounted
});
</script>

<style lang="css" scoped>
.team {
  margin: 4rem 8rem;

  color: white;
}
.team h1 {
  text-align: center;
}
.team-foundersCards,
.team-membersCards {
  display: flex;
  justify-content: space-start;
  flex-wrap: wrap;
  flex: 1 1 22%;
  gap: 2%;
}
.team-buttons {
  margin-top: 1rem;
  display: flex;
  gap: 2%;
}
.values {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 8rem 8rem;
  flex-wrap: wrap;
  margin-bottom: 15rem;
}
.mission {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 4rem 8rem;
  flex-wrap: wrap;
  margin-bottom: 8rem;
}
img {
  border-radius: 10%;
}

.values-img {
  position: relative;
  display: flex;
  margin-right: 10rem;
}

.values-img img {
  width: 22rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.values-img img:first-child {
  position: relative;
  z-index: 1;
  margin-right: -150px;
}

.values-img img:last-child {
  position: relative;
  z-index: 2;
  transform: translateX(-50px);
  transform: translateY(150px);
}

.values-text {
  color: white;
  text-align: left;
  padding: 1rem;
  flex: 1;
  
}
.values-text h2 {
  font-weight: bold;
  font-size: 2rem;
}
.values-text h6 {
  font-size: 0.9rem;
}
.gradient-text {
  margin-bottom: 2rem;
}
.one {
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(54, 133, 243, 1) 100%
  );
}
.two {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(128, 68, 248, 1) 86%
  );
}
.three {
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(170, 0, 255, 1) 100%
  );
}
.gradient {
  background-clip: text;
  color: transparent;
  margin: 0; /* Removes default margin */
  font-size: 2rem; /* Adjust size as needed */
  font-weight: bold; /* Make it bold */
}
.everyone {
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(88, 0, 251, 1) 90%
  );
  background-clip: text;
  color: transparent;
  margin: 0; /* Removes default margin */
  font-size: 2rem; /* Adjust size as needed */
  font-weight: bold; /* Make it bold */
}
.mission-text {
  flex: 1;
  margin-right: 10rem;
}
.mission-text h2 {
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 2rem;
}
.mission-text h6 {
  font-size: 0.9rem;
}

.mission-img {
  flex: 1;
}
.join-pic {
  display: flex;
}
.join-pic-box1 {
  width: 25vw;
  height: 20rem;
  background: linear-gradient(to bottom, #649be6 0%, #101451 100%);
}
.join-pic-box2 {
  width: 25vw;
  height: 20rem;
  background: linear-gradient(to bottom, #101451 0%, #649be6 100%);
}
.join-text {
  text-align: center;
  padding: 8rem;
  background: radial-gradient(circle, #124188 0%, #041022 100%);
  color: white;
}
.join-text h2 {
  font-weight: bold;
  padding-bottom: 2rem;
}
.join-text p {
  margin-bottom: 3rem;
}
#valuetext {
  width: 100%;
  font-size: 2rem;
}
.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>
