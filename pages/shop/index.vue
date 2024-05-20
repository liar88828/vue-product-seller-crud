<template>
  <!--
// v0 by Vercel.
// https://v0.dev/t/T0ooffoeOUD
-->

  <!-- <PageShopHeader /> -->

  <div class="grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
    <div class="sm:col-span-1 md:col-span-2">
      <PageShopDropMenu />
    </div>
    <div class="sm:col-span-3 md:col-span-4 lg:col-span-6">
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"
      >
        <PageShopItemProduct :product="dataProduct" />
        <PageShopItemProduct :product="dataProduct" />
        <PageShopItemProduct :product="dataProduct" />
        <PageShopItemProduct :product="dataProduct" />
        <PageShopItemProduct :product="dataProduct" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"

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

<style></style>
