<template>
  <NuxtLayout name="market">
    <ProductTableMarket :data="dataProductDetails" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataProductDetails } from "~/assets/example/product/dataProduct"
</script>
