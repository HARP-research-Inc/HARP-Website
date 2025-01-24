<script>
import { initHeader, addListeners, initAnimation } from "./animation.js";
import GetStarted from "../General/GetStarted.vue";

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
      <div class="action-items">
        <get-started></get-started>
        
      </div>
    </div>

    <canvas id="demo-canvas"></canvas>
  </div>
</template>

<style>
.canvas-container {
  position: relative;
  width: 100%;
}
.action-items {
  margin-top: 1em;
  display: flex;
  align-items: center;
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
  font-weight: bold;
}

#demo-canvas {
  background: #161616;
  width: 100%;
  clip-path: inset(0 0 30% 0);
}
@media (min-width: 320px) and (max-width: 768px) {
  .canvas-container {
    position: relative;
    width: 100%;
  }
  #heh {
    left: 31%;
    color: white;
    font-size: .75rem;
    width: 50%;
    line-height: 2.5em;
  }
  #heheh {
    margin-top: 1em;
    font-size: .75rem;
    line-height: 1.5em;
    width: 100%;
  }
}


</style>
