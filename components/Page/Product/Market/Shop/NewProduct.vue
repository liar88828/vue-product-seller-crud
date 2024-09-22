<template>
  <ErrorNotFound v-if="!data?.newProduct" />
  <Products v-else :data="data.newProduct" />
</template>

<script setup lang="ts">
const { data } = await useFetch(`/api/product/new-product`)
</script>
