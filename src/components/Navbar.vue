<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="header">
      <router-link :to="{name:'home'}">
        <h2 class="title">Where in the world?</h2>
      </router-link>
     <div class="pages">
        <router-link :to="{name:'home'}">
          <h3 class="title">Home</h3>
        </router-link>
        <router-link :to="{name: 'Favourites'}">
          <h3 class="page">Favourite countries</h3>
        </router-link>
     </div>
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
  .pages{
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }
  .page{
    cursor: pointer;
  }
  @media screen and (max-width: 850px) {
    .header{
      padding: 30px;
    }
  }
</style>