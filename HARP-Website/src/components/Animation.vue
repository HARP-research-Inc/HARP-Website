<script>
import { initHeader, addListeners, initAnimation } from "./animation.js";
import GetStarted from "./GetStarted.vue";

export default {
  components: { GetStarted },
  mounted() {
    initHeader();
    addListeners();
    initAnimation();
  },
};
</script>

<template>
  <div class="canvas-container">
    <div id="heh">
      <h1>
        Effortless Task<br />
        Management with <br />
        <span class="gradient-text">Polymorphic AI</span>
      </h1>
      <h3 id="heheh">
        Pioneering Hybrid Symbolic-Synthetic AI for Next-Gen Task Planning
      </h3>
      <!-- <div class="action-items">
        <get-started></get-started>
        <a href="" id="Careers">Careers</a>
      </div> -->
    </div>

    <canvas id="demo-canvas"></canvas>
  </div>
</template>

<style scoped>
.canvas-container {
  position: relative;
}
.action-items {
  margin-top: 1em;
  display: flex;
  align-items: center;
}
#Careers {
  margin-left: 1em;
  font-size: 0.75em;
  text-decoration: none;
  color: white;
}
#heh {
  position: absolute;
  top: 8em; /* Adjust the position of the heading */
  left: 31%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.8rem;
  z-index: 10; /* Ensures the heading is on top of the canvas */
  text-align: left;
  width: 50%;
  line-height: 2.5em;
}
#heheh {
  margin-top: 1em;
  font-size: 1.5rem;
  line-height: 1.5em;
  width: 75%;
}
.gradient-text {
  background: linear-gradient(
    90deg,
    rgba(0, 255, 255, 1) 0%,
    rgba(165, 0, 247, 1) 100%
  );

  background-clip: text;
  color: transparent;
  font-weight: 500;
}

#demo-canvas {
  background: #161616;
  width: 100%;
  clip-path: inset(0 0 15% 0);
}

@media screen and (max-width: 1000px){
  h1{
    transform: translateY(-40px);
    font-size: 2.9rem;
  }
  h3{
    transform: translateY(-40px);
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 800px){

  h1{
    transform: translateY(-40px);
    font-size: 2.3rem;
  }
  h3{
    font-size: 1.3rem;
  }
  #heh {
    line-height: 2em;
  }
  #heheh{
    transform: translateY(-40px);
    font-size: 1rem;
  }
}
@media screen and (max-width: 500px){

h1{
  transform: translateY(-70px);
  font-size: 2.3rem;
}
#heh {
  line-height: 2em;
}

#heheh{
  transform: translateY(-70px);
  font-size: 1rem;
}
}
</style>
