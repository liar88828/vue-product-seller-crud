<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageMarketHistory v-else :data="data.histories" />
</template>

<script lang="ts" setup>
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
const { data, error, pending } = await useFetch("/api/transaction/history")
definePageMeta({
  middleware: ["market"],
})
definePageMeta({
  layout: "market",
})
</script>
