<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="header">
      <router-link :to="{name:'home'}">
        <h2 class="title">Where in the world?</h2>
      </router-link>
    </div>
</template>

<style scoped>
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
  @media screen and (max-width: 850px) {
    .header{
      padding: 30px;
    }
  }
</style>