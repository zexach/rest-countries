import { defineStore } from "pinia";
import { ref } from 'vue'
import { useToast } from "vue-toastification";

export const useFavouriteCountryStore = defineStore('favouriteCountries', () => {
    const toast = useToast();
    const favouriteCountries = ref([]);

    const addToFavourites = (country) => {
        if(!favouriteCountries.value.includes(country)){
            favouriteCountries.value = [...favouriteCountries.value, country];
            toast(`Successfully added ${country.name.common} to favourites`)
        } else {
            toast(`${country.name.common} is already added`);
        }
    }

    const removeFromFavourites = (selectedCountry) => {
        favouriteCountries.value = favouriteCountries.value.filter((country) => {
           return country.name.common !== selectedCountry.name.common
        })
        toast(`Successfully removed ${selectedCountry.name.common} from favourites`)
    }

    return { favouriteCountries, addToFavourites, removeFromFavourites }
})