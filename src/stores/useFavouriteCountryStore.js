import { defineStore } from "pinia";
import { ref } from 'vue'
import { useToast } from "vue-toastification";

export const useFavouriteCountryStore = defineStore('favouriteCountries', () => {
    const toast = useToast();
    const favouriteCountries = ref([]);

    const addToFavourite = (country) => {
        favouriteCountries.value = [...favouriteCountries.value, country];
        toast('Successfully added country to favourites')
        
    }

    const removeFromFavourite = (selectedCountry) => {
        favouriteCountries.value = favouriteCountries.value.filter((country) => {
           return country.name.common !== selectedCountry.name.common
        })
        toast('Successfully removed country from favourites')
    }

    return { favouriteCountries, addToFavourite, removeFromFavourite }
})