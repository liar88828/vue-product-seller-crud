<template>
  <NuxtLayout name="market">
    <PageMarketConfirm :data-purchases="dataOrders" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataOrders } from "~/assets/example/transaction/dataOrder"
</script>
