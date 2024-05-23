<template>
  <!--
// v0 by Vercel.
// https://v0.dev/t/T0ooffoeOUD
-->

  <!-- <PageShopHeader /> -->

  <PageShop :dataRelated="dataRelated" />
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"

const dataRelated = {
  name: "Wireless Noise-Cancelling Earbuds",
  brand: "Premium audio experience",
  price: 149.99,
  img: "https://picsum.photos/220",
}

const dataProduct: Product = {
  name: "Acme Circles T-Shirt",
  brand: "Acme",
  id: "1",
  price: 49.99,
  stock: 10,
  typeId: "1",
  userId: "1",
  description: "lorem ipsum dolor sit amet",
  image: "https://picsum.photos/100",
}
</script>
