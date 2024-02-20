<script setup>
import { ref } from 'vue';

const emit = defineEmits(['onInput'])

const emitValue = () => {
    emit('onInput', searched.value);
}

const searched = ref('');

</script>

<template>
  <div class="input">
      <input class="search-bar" placeholder="Search for a country..." v-model="searched" type="text">
      <button @click="emitValue">Search</button>
  </div>
</template>

<style scoped>
  .input{
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    gap: 1rem
  }
  .search-bar{
    width: 100%;
    padding: 20px 20px;
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
  button{
    padding: 20px;
    background-color: white;
    border: 0;
    border-radius: 30px;
    box-shadow:  0 6px 20px 0 rgba(161, 161, 161, 0.19);
    cursor: pointer;

  }
</style>