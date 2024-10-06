<template>
  <ElLoading v-if="pending" />
  <ErrorNotFound v-else-if="error || !data" />
  <PageProductLoopVertical
    v-else
    :data="data.bestSeller"
    :link="'/product?category=best-seller'"
    :title="'Best Seller'"
  />
</template>

<script lang="ts" setup>
const { data, pending, error } = await useProduct().bestSeller()
</script>
