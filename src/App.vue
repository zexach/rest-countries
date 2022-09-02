<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container">
    <div class="header">
      <router-link :to="{name:'home'}"><h2 class="title">Where in the world?</h2></router-link>
      <span class="dark-mode">&#x263e; Dark Mode</span>
    </div>
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
  .header{
    width: 100%;
    height: 100px;
    padding: 20px 160px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
  }
  .title{
    font-size: 18px;
    font-weight: 700;
  }
  .dark-mode{
    font-size: 16px;
    font-weight: 600;
  }
  @media screen and (max-width: 850px) {
    .header{
      padding: 30px;
    }
  }
</style>
