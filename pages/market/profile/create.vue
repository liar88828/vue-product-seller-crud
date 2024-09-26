<template>
  <PageMarketProfileCreate />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
  layout: "market",
})
// const { data, error, pending } = await useFetch("/api/market/profile/")
</script>
