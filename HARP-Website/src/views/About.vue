<template>
  <div class="About">
    <Header
      title="About"
      subtitle="We deliver next-gen AI solutions that drive innovation and unlock new possibilities"
    />
    <div class="values">
      <div class="values-img">
        <img src="../assets/team.webp" alt="team photo" />
        <img src="../assets/team.webp" alt="team photo" />
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
          refocused our efforts on AI. After testing our framework developing
          software tools for the FDA's Summer Food Service Program, we began
          developing the Simplified Semantic System Synthesis Framework, or S4,
          our proprietary polymorphic AI language, built from the ground up for
          planning. From here, HARP research hopes to expand its capabilities,
          allowing anyone to create anything.
        </h6>
      </div>

      <div class="mission-img">
        <img src="../assets/team.webp" alt="team photo" />
      </div>
    </div>
    <div class="team">
      <h1 class="team-header">Meet the team</h1>
      <h2 class="team-foundersHeader">Founders</h2>
      <div class="team-foundersCards">
        <TeamMember
          v-for="member in TeamMembers.filter((member) => member.founder)"
          :key="member.id"
          :member="member"
        />
      </div>
      <h2 class="team-membersHeader">Team Members</h2>
      <div class="team-buttons">
        <GeneralButtonNoLink label="View All" @click="filterMembers('all')"/>
        <GeneralButtonNoLink label="Developers" @click="filterMembers('Developer')"/>
        <GeneralButtonNoLink label="Interns" @click="filterMembers('Intern')"/>
        <GeneralButtonNoLink label="Reseachers" @click="filterMembers('Researcher')"/>
      </div>
      <div class="team-membersCards">
        <TeamMember
          v-for="member in filteredMembers.filter((member) => !member.founder)"
          :key="member.id"
          :member="member"
        />
      </div>
    </div>
    <div class="join">
      <div class="join-pic">
        <div class="join-pic-box1"></div>
        <div class="join-pic-box2"></div>
        <div class="join-pic-box1"></div>
        <div class="join-pic-box2"></div>
      </div>
      <div class="join-text">
        <h2>Join our team</h2>
        <p>
          After years of developing our virtual lithography technology, we
          refocused our efforts on AI. After testing our framework developing
          software  tools for the FDA's Summer Food Service Program, we began
          developing the Simplified Semantic System Syn
        </p>
        <div class="button-wrapper">
          <CareersButton label="Careers"/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TeamMember from "@/components/TeamMemberCard.vue";
import Header from "../components/Header.vue";
import GeneralButtonNoLink from "@/components/GeneralButtonNoLink.vue";
import CareersButton from "@/components/CareersButton.vue";
import Footer from "@/components/Footer.vue";
import HarperImg from "@/assets/TeamMember/HARP Research Chisari Harper Background Removed.png"
import KevinImg from "@/assets/TeamMember/HARP research Scott Kevin1 Background Removed.png"
import YuvalImg from "@/assets/TeamMember/Shimoni Yuval about Background Removed.png"


const TeamMembers = [
  {
    id: 1,
    name: "Harper Chisari",
    role: "Cheif Executive Officer",
    founder: true,
    image: HarperImg,
    github: "https://github.com/dashboard",
    linkedin: "https://www.linkedin.com/in/harper-chisari-117169164/",
  },
  {
    id: 2,
    name: "Kevin Scott",
    role: "VP, Special Finance",
    founder: true,
    image: KevinImg,
    github: "https://github.com/dashboard",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    id: 3,
    name: "Yuval Shimoni",
    role: "VP, Business Development",
    founder: true,
    image: YuvalImg,
    github: "https://github.com/dashboard",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    id: 4,
    name: "Marco Pretell",
    role: "Researcher",
    founder: false,
    image: YuvalImg,
    github: "https://github.com/dashboard",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    id: 5,
    name: "David Wang",
    role: "Developer",
    founder: false,
    image: YuvalImg,
    semester: "Spring 2025",
    github: "https://github.com/dashboard",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    id: 6,
    name: "Garrett Gee",
    role: "Intern",
    founder: false,
    image: YuvalImg,
    semester: "Fall 2024",
    github: "https://github.com/dashboard",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    id: 7,
    name: "Shane Stoll",
    role: "Software Engineering Collaborator",
    founder: false,
    image: YuvalImg,
    semester: "Spring 2025",
    github: "https://github.com/dashboard",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    id: 8,
    name: "Daniel He",
    role: "Developer",
    founder: false,
    image: YuvalImg,
    semester: "Spring 2025",
    github: "https://github.com/dashboard",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    id: 9,
    name: "Joshua Pile",
    role: "Intern",
    founder: false,
    image: YuvalImg,
    semester: "Spring 2025",
    github: "https://github.com/dashboard",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    id: 10,
    name: "Dana Solitaire",
    role: "VP, Software Engineering",
    founder: false,
    image: YuvalImg,
    semester: "Spring 2025",
    github: "https://github.com/dashboard",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    id: 11,
    name: "Jonathan Kloepfer",
    role: "Head of Special Projects",
    founder: false,
    image: YuvalImg,
    semester: "Fall 2024",
    github: "https://github.com/dashboard",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    id: 12,
    name: "Harper Chisari",
    role: "Developer",
    founder: false,
    image: YuvalImg,
    semester: "Fall 2024",
    github: "https://github.com/dashboard",
    linkedin: "https://www.linkedin.com/feed/",
  },
];

const filteredMembers = ref([]);

const filterMembers = (role) => {
  console.log("button clickeed");
  if (role === "all") {
    filteredMembers.value = TeamMembers.filter((member) => !member.founder);
  } else {
    filteredMembers.value = TeamMembers.filter(
      (member) => !member.founder && member.role === role
    );
  }
  console.log("Filtered members:", filteredMembers.value);
};

filterMembers("all");

</script>

<style lang="css" scoped>
.team {
  margin: 4rem 8rem;

  color: white;
}
.team h1 {
  text-align: center;
}
.team-foundersCards{
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  flex: 1 1 22%;
  gap: 8%;
}
.team-membersCards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1 1 22%;
  gap: 2%;
}
.team-buttons{
  margin-top: 1rem;
  display: flex;
  gap: 9%;
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
  font-size: 1.25rem;
}
.button-wrapper{
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>
