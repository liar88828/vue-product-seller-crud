<template>
  <NuxtLayout name="market">
    <ProductTableOrder :data-orders="dataOrders" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataOrders } from "~/assets/example/transaction/dataOrder"
</script>
