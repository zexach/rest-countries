<script setup>

defineProps(['showFilterPanel', 'filteredRegion'])

</script>

<template>    
    <div class="filter" @click="showFilterPanel = !showFilterPanel">
      <p class="filter-text">{{filteredRegion.charAt(0).toUpperCase() + filteredRegion.slice(1)}}</p>
    </div>
</template>

<style scoped>
    .filter{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 7px;
    background-color: white;
    box-shadow:  0 6px 20px 0 rgba(161, 161, 161, 0.19);
    cursor: pointer;
  }
  .filter-text{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 500;
    color: grey;
  }
  @media screen and (max-width: 850px){
    .filter{
        width: 50%;
    }
  }
</style>