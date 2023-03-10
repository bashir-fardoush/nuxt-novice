<template>
  

    <a href="#" @click="toggle('home')">Home</a><br>
    <a href="#" @click="toggle('counter')">Counter</a>

    <hr/>
    <NuxtPage/>
    <hr/>
    <lazy-home-welcome v-if="page=='home'" />
    <lazy-counter v-if="page=='counter'"/>    

  
</template>
<script setup>
const page = ref('None');

function toggle(name){
  page.value = name;
}
</script>