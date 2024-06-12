<script setup lang="ts">
// import type { ProductDetail } from "~/types/product/item"
// const { data, error } = await useFetch<ProductDetail>(`/api/shop/${id}`)
// watch(data, () => {
//   console.log(data.value)
// })
// if (!data.value) {
//   throw new Error("data not found")
// }

const { redirectedFrom, params } = useRoute()
await navigateTo(`/shop/${params.id}?redirectedFrom=${redirectedFrom}`)
</script>

<template>
  <!-- <PageProductDetail :data="data" /> -->
  will redirect
</template>
