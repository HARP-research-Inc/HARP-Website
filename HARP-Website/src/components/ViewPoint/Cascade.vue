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
  height: 50vh;
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

/* Adjust the front image */
.product1 {
  z-index: 3;
  top: 40%; /* Vertically centered */
  right: 10%; /* Move further to the right */
  transform: translate(0%, 0%); /* Align correctly */
}

/* Adjust the middle image */
.product2 {
  z-index: 2;
  top: 15%; /* Slightly below the center */
  right: 35%; /* Center the image horizontally */
  transform: translate(0%, 0%);
}

/* Adjust the back image */
.product3 {
  z-index: 1;
  bottom: 40%; /* Lower on the screen */
  left: 50%; /* Slightly shifted to the left */
  transform: translate(0%, 0%);
}

/* Add hover effect */
.product1:hover,
.product2:hover,
.product3:hover {
  z-index: 10; /* Bring the hovered image to the front */
  transform: scale(1.2); /* Slightly enlarge on hover */
}

/* Image styling */
.product img {
  width: 100%; /* Ensure the images scale properly */
  max-width: 600px; /* Limit the maximum size of the images */
  height: auto; /* Maintain aspect ratio */
  border-radius: 1em; /* Optional rounded corners */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Optional shadow for depth */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .product1 {
    top: 60%;
    right: 5%;
  }

  .product2 {
    top: 40%;
    right: 30%;
  }

  .product3 {
    bottom: 0%;
    left: 30%;
  }

  .product img {
    max-width: 300px; 
  }
  .product {
    margin:0vh;
  }
}


</style>

 

