<template>
  <NuxtLayout name="profile">
    <PageTransactionOrder :data-orders="dataOrders" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataOrders } from "~/assets/example/transaction/dataOrder"
</script>
