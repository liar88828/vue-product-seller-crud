<template>
  <ErrorNotFound v-if="!data?.bestProduct" />
  <Products v-else :data="data.bestProduct" />
</template>

<script setup lang="ts">
const { data } = await useFetch(`/api/product/best-product`)
</script>
