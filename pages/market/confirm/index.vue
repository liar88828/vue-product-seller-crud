<template>
  <NuxtLayout name="market">
    <!-- @vue-expect-error -->
    <PageMarketConfirm :data-purchases="data?.market" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
const { data } = await useFetch("/api/market/confirm/")
</script>
