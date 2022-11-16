<script setup>

defineProps(['countries'])

const emit = defineEmits(['selectedRegion'])


const filterRegion = (item) => {
    emit('selectedRegion', item)
}

</script>

<template>
    <div class="filter-panel">
        <button @click="filterRegion('all')" class="continent">All</button>
        <button @click="filterRegion('africa')" class="continent">Africa</button>
        <button @click="filterRegion('americas')" class="continent">Americas</button>
        <button @click="filterRegion('asia')" class="continent">Asia</button>
        <button @click="filterRegion('europe')" class="continent">Europe</button>
        <button @click="filterRegion('oceania')" class="continent">Oceania</button>
    </div>
</template>

<style scoped>
    .filter-panel{
        width: 100%;
        padding: 20px 0;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        border-radius: 7px;
        position: absolute;
        top: 100%;
        z-index: 1;
        box-shadow:  0 6px 20px 0 rgba(161, 161, 161, 0.19);
        background-color: white;
    }
    .continent{
        padding: 5px;
        margin-left: 20px;
        display: flex;
        justify-content: flex-start;
        border: 0;
        background-color: white;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
    }
    .continent:hover{
        color: grey;
    }
    @media screen and (max-width: 850px) {
    .filter-panel{
        width: 50%;
    }
}
</style>
