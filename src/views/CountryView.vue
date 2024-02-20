<script setup>
import Details from '../components/Details.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const countries = ref([])
const props = defineProps(['id'])

onMounted(async() => {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${props.id}`)
    countries.value = response.data
})

</script>

<template>
    <Details :countries="countries" />
</template>
