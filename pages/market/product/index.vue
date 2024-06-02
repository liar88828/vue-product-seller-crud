<template>
  <NuxtLayout name="market">
    <PageProductMarket :data="dataProductDetails" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataProductDetails } from "~/assets/example/product/dataProduct"
</script>
