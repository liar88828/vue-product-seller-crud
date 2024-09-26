<template>
  <ElLoading v-if="!data" />
  <ErrorNotFound v-else-if="error || !data" />
  <PageProductLoopVertical v-else :data="data.bestSeller" />

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
