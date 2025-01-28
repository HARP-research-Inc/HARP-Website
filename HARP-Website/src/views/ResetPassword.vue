<template>
    <div class="page-container">
      <div class="login-container">
        <h1 class="login-title">Reset Password</h1>
        
        <form class="login-form" @submit.prevent="handleSubmit">
            <label for="email" class="sr-only">Password</label>
                <input
                    type="password" class="form-control" v-model=password placeholder="Password"/>
            <label for="email" class="sr-only">Reset Password</label>
                <input
                    type="password" class="form-control" v-model="password_confirm" placeholder="Password Confirm"/>
          
            <button type="submit" class="sign-in-btn">Submit</button>
        </form>
  
        <p v-if="message" :class="['response-message', messageType]">
          {{ message }}
        </p>
  
        <p class="signup-text">
          Cancel Password Reset? <a href="#" @click.prevent="$router.push('/login')" class="signup-link">Back to Login</a>
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
        password_confirm: ''
      };
    },
  
    methods: {
      async handleSubmit(event) {
        event.preventDefault();
        
        try {
          const response = await axios.post('reset-password', {
            password: this.password,
            password_confirm: this.password_confirm,
            token: this.$route.params.token
          });
          
          this.message = 'Password reset success';
          this.messageType = 'success';
        } catch (error) {
          this.message = error.response?.data?.message || 'An error occurred. Please try again.';
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