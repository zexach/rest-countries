<script setup>
import { storeToRefs } from 'pinia'
import { useFavouriteCountryStore } from '../stores/useFavouriteCountryStore';
import CountryCard from '../components/CountryCard.vue';

const favouriteStore = useFavouriteCountryStore();

const { favouriteCountries } = storeToRefs(favouriteStore);

</script>

<template>
    <div class="content">
        <TransitionGroup name="list">
            <div v-if="favouriteCountries.length > 0" v-for="country in favouriteCountries" :key="country.capital" class="countries-container">
                <CountryCard :country="country" :isFavouriteView="true" />
            </div>
            <div v-else>This list is empty</div>
        </TransitionGroup>
    </div>
</template>

<style scoped>
    .content{
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    .list-enter-active,
    .list-leave-active {
    transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
    }
</style>