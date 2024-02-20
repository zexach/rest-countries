<script setup>

defineProps(['country'])

</script>

<template>
    <div class="country">
        <img :src="country.flags.png">
        <h1 class="country-name">{{country.name.common}}</h1>
        <p class="country-information">Population: {{country.population.toLocaleString('en-US')}}</p>
        <p class="country-information">Region: {{country.region}}</p>
    </div>
</template>

<style scoped>
    .country{
      width: 300px;
      padding-bottom: 15px;
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow:  0 6px 20px 0 rgba(161, 161, 161, 0.19);
      border-radius: 7px;
      background-color: white;
      transition: 0.3s
    }
    .country:hover{
      scale: 1.05
    }
    img{
      width: 300px;
      height: 180px;
      border-radius: 7px 7px 0 0;
      box-shadow:  0 6px 20px 0 rgba(161, 161, 161, 0.1);
    }
    .country-name{
      margin-top: 20px;
      font-size: 20px;
      font-weight: 700;
    }
    .country-information{
      font-size: 15px;
    }
</style>
