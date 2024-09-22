<template>
  <ErrorNotFound v-if="!data" />
  <PageProductFlex
    v-else
    :data="data.bestSeller"
    title="Best Sellers"
    link="/product?category=best-seller"
  />
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/product/best-seller")
</script>
