<template>
  <CardActionBetween>
    <NuxtLink to="/shop" class="btn btn-outline btn-sm"
      >Continue Shopping</NuxtLink
    >
    <NuxtLink :to="'/product/pay/' + 1" class="btn btn-info btn-sm"
      >Proceed to Checkout</NuxtLink
    >
  </CardActionBetween>
</template>
