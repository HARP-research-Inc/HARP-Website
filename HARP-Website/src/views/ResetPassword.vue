<template>
  <div class="page-container">
    <div class="login-container">
      <h1 class="login-title">Reset Password</h1>
      
      <form class="login-form" @submit.prevent="handleSubmit">
          <label for="password" class="sr-only">Password</label>
          <input
              id="password"
              type="password" 
              class="input-field"
              v-model="password" 
              placeholder="New Password"
              required
          />
          <label for="password_confirm" class="sr-only">Confirm Password</label>
          <input
              id="password_confirm"
              type="password" 
              class="input-field"
              v-model="password_confirm" 
              placeholder="Confirm Password"
              required
          />
        
          <button type="submit" class="sign-in-btn">Reset Password</button>
      </form>

      <p v-if="message" :class="['response-message', messageType]">
        {{ message }}
      </p>

      <p class="signup-text">
        Remember your password? <a href="#" @click.prevent="$router.push('/login')" class="signup-link">Back to Login</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ResetPassword',
  
  data() {
      return {
          password: '',
          password_confirm: '',
          message: '',
          messageType: 'error'
      };
  },

  methods: {
      async handleSubmit() {
          // Clear previous messages
          this.message = '';
          
          // Validate passwords
          if (this.password.length < 8) {
              this.message = 'Password must be at least 8 characters long';
              this.messageType = 'error';
              return;
          }
          
          if (this.password !== this.password_confirm) {
              this.message = 'Passwords do not match';
              this.messageType = 'error';
              return;
          }
          
          try {
              const token = this.$route.params.token;
              const response = await axios.post(`http://localhost:5000/api/reset-password/${token}`, {
                  password: this.password
              });
              
              this.message = 'Password reset successful. You can now login with your new password.';
              this.messageType = 'success';
              
              // Redirect to login page after 2 seconds
              setTimeout(() => {
                  this.$router.push('/login');
              }, 2000);
          } catch (error) {
              this.message = error.response?.data?.error || 'An error occurred. Please try again.';
              this.messageType = 'error';
          }
      }
  }
};
</script>
  
  <style scoped>
  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-top: 5rem;
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
  
  .login-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
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
    transition: opacity 0.3s;
  }
  
  .sign-in-btn:hover {
    opacity: 0.9;
  }
  
  .signup-text {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #fff;
  }
  
  .signup-link {
    color: #00c6fb;
    text-decoration: none;
  }
  
  .signup-link:hover {
    text-decoration: underline;
  }
  
  .response-message {
    margin-top: 1rem;
    font-weight: bold;
  }
  
  .response-message.error {
    color: #ff4444;
  }
  
  .response-message.success {
    color: #4CAF50;
  }
  </style>