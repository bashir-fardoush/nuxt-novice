<template>
<div class="grid grid-cols-4 gap-4 mt-10">
  <nuxt-link to="/iphone/iphone-13" class="shadow-lg text-center">
    <h1>iPhone 13</h1>
    <div class="flex justify-center border rounded-lg">
      <img src="/images/iphone_13.jpg" width="200"/>
    </div>
    
  </nuxt-link>
  <nuxt-link to="/iphone/iphone-13-pro"  class="shadow-lg text-center border rounded-lg">
    <h1>iPhone 13 Pro</h1>
    <div class="flex justify-center">
      <img src="/images/iphone_13_pro.jpg" width="200"/>
    </div>
    
  </nuxt-link>
  <nuxt-link to="/iphone/iphone-12-pro-max" class="shadow-lg text-center border rounded-lg">
    <h1>iPhone 12 Pro Max</h1>
    <div class="flex justify-center">
      <img src="/images/iphone_12_pro_max.jpg" width="200"/>
    </div>
    
  </nuxt-link>
  <nuxt-link to="/iphone/iphone-11" class="shadow-lg text-center border rounded-lg">
    <h1>iPhone 11</h1>
    <div class="flex justify-center">
      <img src="/images/iphone_11.jpg" width="200"/>
    </div>
    
  </nuxt-link>
  <nuxt-link to="/iphone/iphone-11-pro-max" class="shadow-lg text-center border rounded-lg">
    <h1>iPhone 11 Pro Max</h1>
    <div class="flex justify-center">
      <img src="/images/iphone_11_pro_max.jpg" width="200"/>
    </div>
    
  </nuxt-link>
  <nuxt-link to="/iphone/iphone-SE" class="shadow-lg text-center border rounded-lg">
    <h1>iPhone SE</h1>
    <div class="flex justify-center">
      <img src="/images/iphone_SE.jpg" width="200"/>
    </div>
    
  </nuxt-link>
</div>
</template>
<script setup>

useHead({
  title:"Nuxt - iPhone"
});
</script>