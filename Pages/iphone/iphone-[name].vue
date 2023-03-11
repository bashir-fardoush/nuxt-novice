<template>
  <div>
    <Head>
      <Title>Nuxt3 - iPhone {{ name }}</Title>
    </Head>

    <div class="flex justify-center w-full mt-20">
      <div class="grid grid-cols-2">
        <!-- <img src="/images/iphone_13_pro.jpg" width="200" /> -->
        <img :src="imageUrl" width="200" />
      </div>
      <div class="text-center">
        <h1 class="text-3x1">iPhone {{ name }}</h1>
        <button
          class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48"
          @click="addToCart"
        >
        <span v-if="isInCart()">Remove from cart</span>
        <span v-else>Buy Now</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const cart = useCart();

const name = computed(() => {
  return route.params.name.replaceAll("-", " ");
});

const fullname = computed(()=>{
  return `iphone-${route.params.name}`;
});

function isInCart(){
  return !!cart.value.find((ct)=>ct.name===fullname.value);
}
const imageUrl = computed(()=>{
  switch(route.params.name){
    case "13":
      return "/images/iphone_13.jpg";
      case "13-pro":
      return "/images/iphone_13_pro.jpg";
      case "12-pro-max":
      return "/images/iphone_12_pro_max.jpg";
      case "11":
      return "/images/iphone_11.jpg";
      case "11-pro-max":
      return "/images/iphone_11_pro_max.jpg";
      case "SE":
      return "/images/iphone_SE.jpg";
  }
});




function addToCart(){

  if(isInCart()){
  console.log('Already in cart');
  cart.value = cart.value.filter((ct)=>ct.name !== fullname.value);

  }else{
    cart.value.push({
      name: fullname,
    });

  }

 

}

// useHead({
//   title:`Nuxt3 - iPhone ${route.params.name}`
// });
</script>