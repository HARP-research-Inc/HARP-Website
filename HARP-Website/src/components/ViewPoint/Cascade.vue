<template>
  <div class="product">
    <div class="product1">
      <img src="../../assets/HARPResearchLockUps/Photos/Example1.webp" alt="Product 1" />
    </div>
    <div class="product2">
      <img src="../../assets/HARPResearchLockUps/Photos/Example1.webp" alt="Product 2" />
    </div>
    <div class="product3">
      <img src="../../assets/HARPResearchLockUps/Photos/Example1.webp" alt="Product 3" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Cascade",
};
</script>

<style scoped>
.product {
  position: relative;
  width: 100%;
  height: 60vh; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.product1,
.product2,
.product3 {
  position: absolute;
  transition: transform 0.3s ease-in-out, z-index 0.3s ease-in-out;
}

.product1 {
  z-index: 3; 
  top:50%;
  right: 40%;
}

.product2 {
  z-index: 2; 
  right:60%;
  top: 30%;
}

.product3 {
  z-index: 1; 
  bottom:20%;
  left:40%;
}

/* Hover effect to scale in place and bring the image forward */
.product1:hover,
.product2:hover,
.product3:hover {
  z-index: 10; /* Bring the hovered image to the front */
  transform: scale(1.25); /* Scale up in place */
}

.product img {
  width: 150%; /* Adjust based on your design */
  height: auto;
  border-radius: 2em;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Optional shadow for depth */
}
.product::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 110%;
  /* background: radial-gradient(ellipse at center, rgb(8, 218, 255), transparent); */
  border-radius: 4em;
  z-index: 0;
  filter: blur(0.1rem);
  opacity: 0.1;
  transition: opacity 0.3s ease-in; /* Smooth transition */
}



</style>

 

