<script setup>
import { ref } from 'vue';

const emit = defineEmits(['onInput'])

const emitValue = () => {
    const searchValue = ref(searched)
    emit('onInput', searchValue.value);
}

const searched = ref('');

</script>

<template>
      <input class="search-bar" placeholder="Search for a country..." v-model="searched" @keypress="emitValue" type="text">
</template>

<style scoped>
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
</style>