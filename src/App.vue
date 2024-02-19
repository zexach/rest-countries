<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>

<template>
  <div class="container">
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped>
  .container{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: rgb(248, 248, 248);
    position: relative;
  }
</style>
