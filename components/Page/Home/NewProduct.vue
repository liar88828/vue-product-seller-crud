<template>
  <ErrorNotFound v-if="!data" />
  <PageProductFlex
    v-else
    :data="data.newProduct"
    title="New Products"
    link="/product?category=new-products"
  />
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/product/new-product")
</script>
