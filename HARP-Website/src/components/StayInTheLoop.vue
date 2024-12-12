<template>
  <div class="stay-in-the-loop">
    <div class="image-section">
      <img src="../assets/team.webp" alt="" class="image-placeholder" />
    </div>
    <div class="content-section">
      <h1 id="FirstText">Stay in the Loop.</h1>
      <span id="SecondaryText">Join our community of 1000+</span>
      <div class="subscribe-form">
        <input type="email" placeholder="Enter your email..." />
        <button>Subscribe</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StayInTheLoop",
};
</script>

<style scoped>
#FirstText {
  color: white;
  font-size: 3em;
  margin: -2% 0% 3% 10%;
}
#SecondaryText {
  color: white;
  font-size: 2em;
  margin: -3% 0% 3% 15%;
}
.stay-in-the-loop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5em;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(41, 105, 214, 1) 0%,
    rgba(0, 0, 0, 1) 73%
  );
  border-radius: 2em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin: 5% 7% 5% 7%;
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 20rem;
  height: 20rem;
  background-color: #d1d5db;
  border-radius: 1em;
  object-fit: cover;
}

.content-section {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 2em;
}

.content-section h1 {
  font-size: 2.5em;
  color: white;
  margin-bottom: 0.5em;
}

.content-section p {
  font-size: 1.2em;
  color: #a0aec0;
  margin-bottom: 1em;
}

.subscribe-form {
  display: flex;
  align-items: center;
  background-color: black;
  padding: 0.5em 1em;
  border-radius: 2em;
  border: solid white;
  width: 80%;
  justify-content: center; 
}

.subscribe-form input {
  background: none;
  border: none;
  outline: none;
  color: white;
  padding: 0.5em;
  font-size: 1em;
  flex: 1;
  height: 2.5em; 
}

.subscribe-form input::placeholder {
  color: #718096;
}

.subscribe-form button {
  background-color: white;
  border: none;
  border-radius: 1.5em;
  padding: 0.5em 1.5em;
  font-size: 1em;
  cursor: pointer;
  color: black;
  margin-left: 1em;
  height: 2.5em; 
}

@media (max-width: 768px) {
  .stay-in-the-loop {
    flex-direction: column; 
    padding: 3em 2em; 
    margin: 3% 5%; 
  }

  .image-section {
    flex: none;
    width: 100%;
    margin-bottom: 2em;
  }

  .image-placeholder {
    width: 100%;
    height: auto;
    max-width: 300px;
    margin: 0 auto; 
  }

  .content-section {
    flex: none;
    padding-left: 0;
    align-items: center; 
    text-align: center; 
  }

  #FirstText {
    font-size: 2em; 
    margin: 0 0 1em 0; 
  }

  #SecondaryText {
    font-size: 1.5em; 
    margin: 0 0 1.5em 0; 
  }

  .subscribe-form {
    width: 100%;
    margin-top: 1em; 
  }

  .subscribe-form input {
    font-size: 1.1em; 
    height: 2.5em; 
  }

  .subscribe-form button {
    font-size: 1.1em; 
    padding: 0.5em 1em; 
    height: 2.5em;
  }
}

</style>

