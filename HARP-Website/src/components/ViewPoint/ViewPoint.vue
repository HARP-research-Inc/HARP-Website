<template>
  <div>
    <div class="viewpoint-container">
      <div class="viewpoint_background"></div>
      <div class="displaymain">
        <div class="introduction">
          <img src="\src\assets\HARPResearchLockUps\LogoLockups\HARP Logo Square Blue TRANS.png" alt="Logo" class="logo">
          <div class="product-name">
            <h1>Viewpoint</h1>
            <h3>for Outlook</h3>
          </div>
        </div>
      
        <div class="text-block">
          <h1>Smart Emails Made Simple</h1>
          <button class="blue-button"> Try Now</button>
        </div> 
        
        <div class="product">
          <img src="../../assets/HARPResearchLockUps/Photos/Example1.webp" alt="" class="">
        </div>
        
        <div class="info">
          <div class="description-block">
            <h1>Faster. Smarter.</h1>
            <h1>Tailored to you.</h1>
            <h3>With Viewpoint, the Microsoft Outlook Add-In, you can streamline your tasks with just a single sentence.</h3>
          </div> 

          <div class="product-images">
            <div class="product-card">
              <img src="../../assets/HARPResearchLockUps/Photos/Example1.webp" alt="Automate" />
              <h1>Automate From Your Mailbox</h1>
              <p>Streamline tasks right from your inbox with ease.</p>
            </div>
            <div class="product-card">
              <img src="../../assets/HARPResearchLockUps/Photos/Example1.webp" alt="Settings" />
              <h1>Change Account Settings</h1>
              <p>Customize your accounts for a personalized experience.</p>
            </div>
            <div class="product-card">
              <img src="../../assets/HARPResearchLockUps/Photos/Example1.webp" alt="Rules" />
              <h1>Manage Rules and Automations</h1>
              <p>Take control of automations and workflows effortlessly.</p>
            </div>
          </div>
        </div> 
    
      <div class="automation-title">
          <h2>Automation: Easy as 1, 2, 3</h2>
      </div>
      <div class="container">
        <div class="box">
          <span></span>
          <div class="content">
            <h2>Install The Extension</h2>
            <p>Quickly add the Viewpoint extension to your setup.</p>
          </div>
        </div>
        <div class="box">
          <span></span>
          <div class="content">
            <h2>Describe Automated Action</h2>
            <p>Set your custom automation in the Viewpoint ribbon.</p>
          </div>
        </div>
        <div class="box"><span></span>
          <div class="content">
            <h2>Begin Automating Now!</h2>
            <p>Click start and let the magic happen!</p>
          </div>
        </div>
        <div class="box"><span></span>
          <div class="content">
            <h2>
              Looking to try Viewpoint now?</h2>
            <a href="#">Click Here to Try It Today!</a>
          </div>
        </div>
      </div> 
    </div>
  </div>
    <StayInTheLoop />
    <Footer /> 
  </div> 
</template>
<script>
import StayInTheLoop from "@/components/General/StayInTheLoop.vue";
import Footer from "../General/Footer.vue";

export default {
  components: {
    StayInTheLoop,
    Footer,
  }
}
</script>
<style scoped>
@import './viewpoint.css';

</style>

