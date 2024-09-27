<template>
  <ElLoading v-if="pending" />
  <ErrorNotFound v-else-if="error || !data" />
  <PageProductLoopVertical
    v-else
    :data="data.bestSeller"
    :link="'/product?category=best-seller'"
    :title="'Best Seller'"
  />

  <!-- <PageProductFlex
    v-else
    :data="data.bestSeller"
    title="Best Sellers"
    link="/product?category=best-seller"
  /> -->
</template>

<script lang="ts" setup>
const { data, pending, error } = await useFetch("/api/product/best-seller")
</script>
