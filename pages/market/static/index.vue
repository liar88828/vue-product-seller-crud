<template>
  <div>Static</div>
  <h1>Stock Brand Product</h1>
  <h1>Compare Sale Product</h1>
  <h1>Best Sell By Product</h1>
  <h1>Best Sell By Category</h1>
  <h1>Best Sell By Brand</h1>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <div v-else>
    {{ data }}
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
  layout: "market",
})
const { id } = useRoute().params
const { data, error, pending } = await useFetch("/api/market/statics")
</script>
