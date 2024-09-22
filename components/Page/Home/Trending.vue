<template>
  <ErrorNotFound v-if="!data" />
  <PageProductFlex
    v-else
    :data="data.trending"
    title="Trending Products"
    link="/product?category=trading-products"
  />
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/product/trending")
</script>
