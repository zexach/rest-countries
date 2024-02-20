<script setup>
import { useFavouriteCountryStore } from '../stores/useFavouriteCountryStore.js'


const favouriteStore = useFavouriteCountryStore();
const { addToFavourite, removeFromFavourite } = favouriteStore;

const props = defineProps(['country', 'isFavouriteView'])
</script>

<template>
  <div class="content">
    <router-link :to="{ name: 'CountryView', params: { id: country.name.common } }">
      <div class="country">
        <img :src="country.flags.png">
        <h1 class="country-name">{{country.name.common}}</h1>
        <div class="country-details">
            <p class="country-information">Population: {{country.population.toLocaleString('en-US')}}</p>
            <p class="country-information">Region: {{country.region}}</p>
        </div>
      </div>
    </router-link>
    <button v-if="!isFavouriteView" @click="addToFavourite(props.country)" class="add-to-favourite">Add to favorites</button>
    <button v-else @click="removeFromFavourite(props.country)" class="add-to-favourite">Remove from favourites</button>
  </div>
</template>

<style scoped>
    .content{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .country{
      width: 300px;
      padding-bottom: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
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
      font-size: 20px;
      font-weight: 700;
    }
    .country-details{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .country-information{
      font-size: 15px;
    }
    .add-to-favourite{
      padding: 0.5rem;
      border: 1px solid rgb(175, 175, 175);
      border-radius: 5px;
      background-color: transparent;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s;
    }
    .add-to-favourite:hover{
      scale: 1.05
    }
</style>
