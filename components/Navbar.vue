<template>
  <nav class="bg-purple-900 text-white text-lg  flex justify-between shadow-lg p-3">
    <div class="flex">
      <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link  class="ml-4" to="/iphone">iPhone</nuxt-link>
    <p class="ml-4" >Cart ({{ cart.length }})</p>
    <p class="ml-4" >Route Changed:  ({{ pageVisit }})</p>
    </div>
    
    <div v-if="auth.isAuthenticated">
      <nuxt-link to="/profile">Profile</nuxt-link>
      <button class="ml-4" @click="logout">Logout</button>
    </div>
    
    <nuxt-link v-else to="/login">Login</nuxt-link>
    
  </nav>
</template>
<script setup>
const cart = useCart();
const auth = useAuth();
const pageVisit = usePageVisitCount();
function logout(){
  auth.value.isAuthenticated = false;
}
</script>