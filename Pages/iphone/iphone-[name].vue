<template>
  <div>
    <h4>This is iPhone {{ name}}</h4>
    <p>Got it?</p>
  </div>
</template>
<script setup>
const route = useRoute();
const name = computed(()=>{
  return route.params.name.replaceAll('-',' ');
});

</script>