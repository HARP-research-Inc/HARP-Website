<template>
    <div>
        <div class="research">
        <div class="research-header">
            <h1>Research Paper Title Important</h1>
            <h3>Insert descriptionof product. Explore the full range of our innovative work and see how we're shaping the future of technoloInsert
                 descriptionof product. Explore the full range of our innovative work and see how we're shaping the future of technolo</h3>
            <GeneralButton label="Contributors" class="small-button"/>
        </div>
        <Footer/>
    </div>
    </div>
</template>

<script setup>
import GeneralButton from '@/components/GeneralButton.vue';

</script>

<style lang="css" scoped>
.research {
  align-items: center;
  text-align: center;
  padding: 2rem;
  color: white;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
}

.research-header {
  max-width: 100vw;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;
}

.research-header h1,
.research-header h3 {
  color: white;
  margin: 0.5rem 0;
  max-width: 50vw;
}

.research-header h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.research-header h3 {
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 3rem;
}

.small-button {
  width: 10rem;
}

</style>