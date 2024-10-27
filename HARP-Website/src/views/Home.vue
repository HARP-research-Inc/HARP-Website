<script>
import Animation from "../components/Animation.vue";
import AboutUsButton from "../components/AboutUsButton.vue";
import ProjectsButton from "../components/ProjectsButton.vue";
import Cube from "../components/Cube.vue";
import ProductsButton from "@/components/ProductsButton.vue";
import StayInTheLoop from "@/components/StayInTheLoop.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Animation,
    AboutUsButton,
    ProjectsButton,
    Cube,
    ProductsButton,
    StayInTheLoop,
    Footer,
  },
};
</script>

<template>
  <div>
    <Animation />
    <div class="harpstart">
      <div class="harp">
        <h1 id="intro">HARP Research Inc.</h1>
        <div class="founderphotos">
          <img src="../assets/team.webp" alt="Founder 1" />
          <img src="../assets/team.webp" alt="Founder 2" />
          <img src="../assets/team.webp" alt="Founder 3" />
        </div>
        <div class="founderinfo">FOUNDERS OF <br />HARP RESEARCH INC.</div>
      </div>

      <div class="harpright">
        <div class="harpinfo">
          <h1>
            At HARP Research, we're leading the way in making AI smarter and
            more accessible with our Polymorphic AI Framework—tailored solutions
            now, and the future of Artificial General Intelligence tomorrow.
          </h1>
          <AboutUsButton />
        </div>
      </div>
    </div>

    <div class="harpprojects">
      <h1 id="intro2">Projects</h1>
      <div class="harp2">
        <div class="vertical-line"></div>
        <div class="harpinfo2">
          <h1 id="projectstext">
            Transforming AI's powerful predictions into ultra-compact tools,
            small enough to fit on <br />
            <span class="gradient-text">a calculator.</span>
          </h1>
          <ProjectsButton />
        </div>
        <div>
          <img src="../assets/HARP Research Chip.webp" alt="" id="chipimg" />
        </div>
      </div>
    </div>

    <div class="harpproducts">
      <div class="vertical-line"></div>
      <div class="productsinfo">
        <h1 class="harpproductsinfo">
          With 65+ years of AI expertise, we’ve created Polymorphic AI—an
          efficient, open-source framework anyone can use,<br />
          <span class="product-text">no super computer needed.</span>
        </h1>
        <ProductsButton></ProductsButton>
      </div>
      <Cube></Cube>
    </div>

    <div class="images">
      <img src="../assets/Example1.webp" alt="img" />
      <img src="../assets/Example2.webp" alt="img" />
    </div>

    <StayInTheLoop></StayInTheLoop>
    <Footer></Footer>
  </div>
</template>

<style lang="css" scoped>
.product-text {
  background: rgb(27, 104, 236);
  background: linear-gradient(
    90deg,
    rgba(27, 104, 236, 1) 0%,
    rgba(166, 251, 229, 1) 49%,
    rgba(27, 104, 236, 1) 82%
  );

  font-size: 1.5em;
  margin-left: 0.2em;
  background-clip: text;
  color: transparent;
}
.gradient-text {
  color: linear-gradient(
    270deg,
    rgba(155, 87, 243, 1) 10%,
    rgba(0, 153, 255, 1) 40%,
    rgba(127, 226, 147, 1) 86%
  );
  font-size: 1.6em;
  margin-left: 0.2em;
}
#chipimg {
  width: 40em;
  height: 20em;
  border-radius: 5em;
  object-fit: cover;
  margin: 2em 7em 2em;
  transition: transform 0.3s ease;
}
#chipimg:hover {
  transform: scale(1.2);
  z-index: 10;
}
.harpstart {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 3em;
}
#intro,
.founderinfo {
  color: white;
  font-weight: 400;
}
#intro {
  margin: -3em 0 2em 6rem;
  font-size: 3em;
}
.founderinfo {
  margin: 0 0 2em 6rem;
  line-height: 1.2em;
  font-size: 2.5em;
}

.founderphotos {
  width: 50%;
  padding: 1em;
  margin: -4em 0 2em 5rem;
  display: flex;
  justify-content: flex-start;
  position: relative;
}

.founderphotos img {
  width: 11em;
  /* height: 10em; */
  border-radius: 50%;
  position: relative;
  z-index: 1;
  margin-left: -2em;
  border: 4px solid rgba(0, 0, 0, 1);
  object-fit: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease, z-index 0.3s ease;
}

.founderphotos img:first-child {
  margin-left: 0;
}

.founderphotos img:hover {
  transform: scale(1.1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.harpright {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  margin: -7em 6rem 0 0;
  gap: 1.5em;
}
.harpinfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5em;
  color: white;
  text-align: right;
}
.harpprojects {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20em 3em 5em 5em;
  gap: 1em;
}
.harpinfo2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3em;
  color: white;
  margin-left: 2em;
}
#intro2 {
  color: white;
  font-weight: 400;
  margin: -3em 0 2em 5rem;
  font-size: 3em;
}
.harp2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: -3em 0 2em 5rem;
  gap: 2em;
}
.vertical-line {
  position: relative;
  width: 2px;
  height: 30vh;
  background-color: #4a4a4a;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vertical-line::before {
  content: "";
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  width: 6px;
  height: 10vh;
  background-color: white;
}
#projectstext {
  font-size: 2.2em;
  font-weight: 400;
}

.harpproducts {
  margin: 15em 3em 5em 5em;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
}
.harpproductsinfo {
  color: white;
  text-align: center;

  font-size: 2em;
}
.productsinfo {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4em;
}
.images {
  position: relative;
  width: 40em;
  height: 20em;
  margin-bottom: 30rem;
}

.images img {
  width: 50em;
  height: 30em;
  border-radius: 2em;
  object-fit: cover;
  position: absolute;
  margin: 5% 50% 50% 50%;
  transition: transform 0.3s ease;
}

.images img:nth-child(1) {
  top: 10em;
}

.images img:nth-child(2) {
  left: 20em;
}
.images img:nth-child(1):hover {
  transform: scale(1.2);
  z-index: 10;
}

.images img:nth-child(2):hover {
  transform: scale(1.2);
  z-index: 10;
}
</style>
