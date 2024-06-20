<script setup lang="ts">
// import { dataPreviews } from "~/assets/example/product/dataPreview"
// import {
//   dataProductDetails,
//   dataProducts,
// } from "~/assets/example/product/dataProduct"
// import { marketStatic } from "~/assets/example/user/dataCompany"
// import { dataImage } from "~/assets/example/product/image"
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
