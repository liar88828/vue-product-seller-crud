<script setup lang="ts">
definePageMeta({
  layout: "shop",
})

// defineMid
// import { dataProductDetailServer } from "~/assets/example/product/dataProduct"
// import type { ProductDetail } from "~/types/product/item"

const { id } = useRoute().params
const { data, error, pending } = await useFetch(`/api/product/shop/${id}`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>

<template>
  <Suspense>
    <template #fallback>Loading.....</template>
    <template #default>
      <ElLoading v-if="pending" />
      <ElError v-else-if="error || !data" />
      <PageProductDetail v-else :data="data.product" />
    </template>
  </Suspense>
</template>
