<template>
  <NuxtLayout name="profile">
    <PageTransactionOrder :data="dataOrders" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataOrders } from "~/assets/example/transaction/dataOrder"
</script>
