<template>
  <nav class="bg-purple-900 text-white text-lg  flex justify-between shadow-lg p-3">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/iphone">iPhone</nuxt-link>
    <nuxt-link to="/profile">Profile</nuxt-link>
    <p>Cart ({{ cart.length }})</p>
  </nav>
</template>
<script setup>
const cart = useCart();
</script>