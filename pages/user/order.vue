<template>
  <NuxtLayout name="profile">
    <ProductTableOrder :data-orders="dataOrders" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataOrders } from "~/assets/example/dataOrder"
</script>
