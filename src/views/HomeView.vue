<script setup>
import { onMounted, ref, VueElement } from 'vue';
import { computed } from '@vue/reactivity';
import Country from '../components/Country.vue';
import FilterPanel from '../components/FilterPanel.vue';
import axios from 'axios';
import vClickOutside from 'v-click-outside'


const showFilterPanel = ref(false)
const searched = ref('')
const countries = ref([])
const BASE_URL = 'https://restcountries.com/v3.1/'

onMounted(async () => {
      const response = await axios.get(BASE_URL + 'all')
      countries.value = response.data 
})

const matchingResult = computed(() => {
  return countries.value.filter((name) => (name.name.common.toLowerCase()).includes(searched.value))
})

const clickOutside = () => {
  if(showFilterPanel.value) {
    showFilterPanel.value = false
  }
}

</script>

<template>
  <div class="content">
    <div class="search-filter">
      <input class="search-bar" placeholder="Search for a country..." v-model="searched" type="text">
      <div class="filter-container">
        <div class="filter" v-click-outside="clickOutside" @click="showFilterPanel = !showFilterPanel">
          <p class="filter-text">Filter by Region</p>
        </div>
        <FilterPanel @selectedRegion="" :countries="countries" @click="" v-if="showFilterPanel" />
      </div>
    </div>
    <div class="countries">
      <div v-for="country in matchingResult" :key="country.capital" class="countries-container">
        <router-link :to="{ name: 'CountryDetails', params: { id:country.name.common } }"><Country :country="country" /></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .content{
    width: 100%;
    padding: 0 20px;
    margin-bottom: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .search-filter{
    width: 80%;
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
    background-color: rgb(248, 248, 248);
  }
  .search-bar{
    width: 35%;
    height: 60px;
    padding: 20px 20px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    border-radius: 7px;
    border: 0;
    background-color: white;
    box-shadow:  0 6px 20px 0 rgba(161, 161, 161, 0.19);
    font-size: 16px;
    font-weight: 600;
    color:rgb(117, 117, 117);
  }
  .search-bar:focus{
    outline: none
  }
  .filter-container{
    width: 20%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
  }
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
  }
  .countries{
    width: 80%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .countries-container{
    width: 300px;
    margin-top: 30px;
  }

@media screen and (max-width: 850px) {
  .search-filter{
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .search-bar{
    width: 100%;
  }
  .filter-container{
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
  }
  .filter{
    width: 50%;
  }
  .countries-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
