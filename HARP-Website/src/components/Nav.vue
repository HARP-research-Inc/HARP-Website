<template>
    <div>
        <nav>
            <div class="nav-left">
                <router-link class="navLink" to="/">Home</router-link>
                <router-link class="navLink" to="/about">About</router-link>
                <router-link class="navLink" to="/products">Products</router-link>
                <router-link class="navLink" to="/projects">Projects</router-link>
                <router-link class="navLink" to="/articles">Articles</router-link>
            </div>
            <div class="nav-right">
                <router-link class="navLink" to="/contact">Contact</router-link>
                <router-link class="navLink" to="/login">Get Started</router-link>
            </div>
            
            
        </nav>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
    nav {
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: space-between; 
        padding: 2% 5%;
        background-color: transparent;
        z-index:  1000;
        text-decoration: none;
        
    }
    .nav-left,
    .nav-right {
        display: flex;
        align-items: center;
        gap: 50px;
    }
    .navLink{
        text-decoration: none;
        color: white;
    }

</style>