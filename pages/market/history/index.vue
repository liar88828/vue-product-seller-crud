<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageTransactionMarket v-else :data="data.histories" />
</template>

<script lang="ts" setup>
const { data, error, pending } = await useFetch("/api/transaction/history")
definePageMeta({
  middleware: ["market"],
  layout: "market",
})
</script>
