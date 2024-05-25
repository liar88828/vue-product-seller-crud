<template>
  <NuxtLayout name="market">
    <PageHistoryOrder :data-orders="dataOrders" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataOrders } from "~/assets/example/dataOrder"
</script>

