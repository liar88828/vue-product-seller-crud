<template>
  <NuxtLayout name="market">
    <PageTransactionOrder :data-orders="dataOrders" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataOrders } from "~/assets/example/transaction/dataOrder"
</script>
