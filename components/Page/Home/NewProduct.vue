<template>
  <ElLoading v-if="pending" />
  <ErrorNotFound v-else-if="error || !data" />
  <PageProductLoopHorizontal
    v-else
    :data="data.newProduct"
    :link="'/product?category=new-product'"
    :title="'New Products'"
  />
</template>

<script lang="ts" setup>
const { data, pending, error } = await useFetch("/api/product/new-product")
</script>
