<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-logo">
        <router-link class="navLink" to="/"
          ><img
            src="../../assets/HARPResearchLockUps/LogoLockups/HARP Logo Shirt Res.svg"
            alt="HARP Logo"
            class="logo"
        /></router-link>
        <p>
          HARP Research accelerates innovation by delivering cutting-edge solutions that drive progress and create real-world impact. Driving Innovation, Delivering Impact.
        </p>
      </div>
      <div class="vertical-line"></div>
      <div class="footer-links">
        <div class="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <router-link class="navLink" to="/about">About</router-link>
            </li>
            <li>
              <router-link class="navLink" to="/products">Products</router-link>
            </li>
            <li>
              <router-link class="navLink" to="/articles">Articles</router-link>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms & Services</a></li>
            <li><a href="#">Privacy Policies</a></li>
            <li><a href="#">Cookie Policies</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Contact</h3>
          <p>
            <a id="mail" href="mailto:info@harpresearch.ai"
              >info@harpresearch.ai</a
            >
          </p>
          <p><a id="mail" href="tel:+18024400618">+1 (802)-440-0618</a></p>
          <div class="social-links">
            <div id="socials">
              <h1 id="followtext">Follow us here:</h1>
              <a href="#"><GithubIcon /></a>
              <a href="#"><LinkedInIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import GithubIcon from "../../assets/SocialMediaIcons/GithubIcon.vue";
import LinkedInIcon from "../../assets/SocialMediaIcons/LinkedInIcon.vue";

export default {
  name: "Footer",
  components: {
    GithubIcon,
    LinkedInIcon,
  },
};
</script>

<style scoped>
.vertical-line {
  position: relative;
  width: 1px;
  height: 30vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -2em 5em 0 1em;
}
#followtext {
  color: white;
  font-size: 1em;
}
#mail {
  text-decoration: none;
  color: white;
}
.footer-container {
  background-color: #000;
  color: #fff;
  padding: 5em 0;
  border-top: 1px solid #fff;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 75em;
  margin: 0 auto;
  padding: 0 1.5em;
}

.footer-logo {
  flex: 1;
  text-align: left;
}

.footer-logo img {
  width: 10em;
  margin-bottom: 1em;
}

.footer-logo p {
  max-width: 300px;
  color: #a0aec0;
  line-height: 1.5em;
  font-size: 1em;
}

.footer-links {
  display: flex;
  flex: 2;
  justify-content: space-between;
}

.footer-column {
  margin-right: 2em;
}

.footer-column h3 {
  font-size: 1.2em;
  margin-bottom: 0.5em;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 0.5em;
}

.footer-column ul li a {
  color: #a0aec0;
  text-decoration: none;
}

.footer-column ul li a:hover {
  color: #fff;
}

.footer-column p {
  margin: 0.5em 0;
}

.social-links {
  display: flex;
  align-items: start;
  flex-direction: column;
}
#socials a {
  margin: 0.5em;
}
.social-links span {
  margin-right: 1em;
}

.social-links a {
  display: inline-flex;
}

.social-links a svg {
  width: 24px;
  height: 24px;
  margin-right: 0.5em;
}
</style>
