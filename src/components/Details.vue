<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const countries = ref([])

onMounted(async() => {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${props.id}`)
    countries.value = response.data
})

const props = defineProps(['id'])


</script>

<template>
    <div class="top-info" v-for="country in countries" :key="country.capital">
        <div class="flag">
            <img :src="country.flags.png">
        </div>
        <div class="right-panel">
            <h2 class="country-name">{{country.name.common}}</h2>
            <p class="country-info">Population: {{country.population.toLocaleString('en-US')}}</p>
            <p class="country-info">Region: {{country.region}}</p>
            <p class="country-info">Sub Region: {{country.subregion}}</p>
            <p class="country-info">Capital: {{country.capital[0]}}</p>
            <p class="country-info bottom-info" v-for="currency in country.currencies">Currencies: {{currency.name}}</p>
            <p class="country-info">Languages: <span v-for="(lang,index) in country.languages" :key="index">-{{lang}}&nbsp;</span></p>
            <div class="border-countries">
                <h3>Border Countries:</h3>
                <div class="borders">
                    <div class="border" v-for="border in country.borders">
                        <button>{{border}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
      .top-info{
        width: 100%;
        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: rgb(63, 63, 63);
        }
    .flag{
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        }
    .bottom-info{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        }
    .country-name{
        padding: 5px 0;
        font-weight: 700;
        font-size: 25px;
        }
    .country-info{
        padding: 5px 0;
        font-size: 16px;
        }
    .border-countries{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        }
    .borders{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .borders{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    h3{
        margin: 20px 0;
    }
    button{
        width: 80px;
        height: 40px;
        margin: 2px;
        background-color: white;
        border: 0;
        border-radius: 5px;
        box-shadow:  0 6px 20px 0 rgba(161, 161, 161, 0.19);
    }
    @media screen and (max-width: 850px) {
        .top-info{
            margin: 50px 0;
            flex-direction: column;
            align-items: center; 
        }
        .right-panel{
            width: 70%;
            margin-top: 20px;
        }
    }

</style>