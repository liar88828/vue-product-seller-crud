<template>
  <NuxtLayout name="market">
    <div>Static</div>
    <h1>Stock Brand Product</h1>
    <h1>Compare Sale Product</h1>
    <h1>Best Sell By Product</h1>
    <h1>Best Sell By Category</h1>
    <h1>Best Sell By Brand</h1>
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data" />
    <div v-else class="">
      {{ data.marketStatic }}
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { id } = useRoute().params
const { data, error, pending } = await useFetch("/api/market/statics/:id", {
  params: {
    id,
  },
})
</script>
