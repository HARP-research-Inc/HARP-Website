<template>
  <div class="page-container">
    <div class="login-container">
      <h1 class="login-title">Login</h1>
      <div class="social-buttons">
        <button class="social-btn apple"></button>
        <button class="social-btn microsoft"></button>
        <button class="social-btn google"></button>
      </div>
      <p class="or-text">or</p>
      <form class="login-form">
        <input type="email" placeholder="Email Address" class="input-field" />
        <input type="password" placeholder="Password" class="input-field" />
        <a href="#" class="forgot-password">Forgot password?</a>
        <button type="submit" class="sign-in-btn">Sign In</button>
      </form>
      <p class="signup-text">
        Don't have an account yet? <a href="#" class="signup-link">Sign Up.</a>
      </p>
      <button class="join-btn" @click="redirectToAAS" >
        <img
          src="../assets/assets/AAS Logo.svg"
          alt="AAS Logo"
          class="aas-logo"
        />
        Join AAS
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    redirectToAAS() {
      this.$router.push("/AASReroute"); 
    },
  },
};
</script>

<style lang="css" scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #fff;
  padding: 2rem;
  width: 50%;
  background: #1c1c1c;
  border-radius: 10px;
}

.login-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.social-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-btn {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.apple {
  background: url("../assets/apple-logo-transparent.png") no-repeat center;
  background-size: 50%;
  background-color: #ffffff; /* White background for contrast */
  border: 1px solid #ddd; /* Light border for definition */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.apple:hover {
  transform: scale(1.1); /* Slightly enlarge on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add hover shadow */
}

.microsoft {
  background: url("../assets/Microsoft_Logo_512px.png") no-repeat center;
  background-size: 50%;
  background-color: #f3f3f3; /* Light gray background for Microsoft */
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.microsoft:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.google {
  background: url("../assets/Google_Icons-09-512.webp") no-repeat center;
  background-size: 50%;
  background-color: #ffffff; /* White background for Google */
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.google:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.or-text {
  margin: 1rem 0;
  font-size: 1rem;
  color: #ccc;
}

.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-field {
  width: 100%;
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid #444;
  background-color: #1e1e1e;
  color: #fff;
}

.input-field::placeholder {
  color: #888;
}

.forgot-password {
  align-self: flex-end;
  font-size: 0.9rem;
  color: #ccc;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.sign-in-btn {
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(90deg, #005bea, #00c6fb);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}

.sign-in-btn:hover {
  opacity: 0.9;
}

.signup-text {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.signup-link {
  color: #00c6fb;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}

.join-btn {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  background: linear-gradient(90deg, #8a2387, #e94057, #f27121);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}

.aas-logo {
  width: 20px;
  height: 20px;
}
</style>
