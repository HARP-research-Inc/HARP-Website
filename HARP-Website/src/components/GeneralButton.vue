<template>
    <router-link  
    v-if="to" 
    :to="to" 
    class="blue-button">
      {{ label }}
    </router-link>
  </template>
  
  <script>
  
  export default {
    props: {
      label: {
        type: String,
        default: "Default Text" 
      },
      to: {
        type: String,
        default: '#', 
      },
    }
  };
  </script>
  
  <style scoped>
  .blue-button {
    background-color: #124188;
    color: white;
    border: none;
    padding: 0.75em 1rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2em;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-decoration: none;
    width: 100%;

  }
  
  .blue-button:hover {
    background-color: #0056b3;
  }
  
  .blue-button svg {
    margin-left: 8px;
  }
  </style>
  