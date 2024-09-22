<template>
  <ErrorNotFound v-if="!data?.discount" />
  <Products v-else :data="data.discount" />
</template>

<script setup lang="ts">
const { data } = await useFetch(`/api/product/discount`)
</script>
