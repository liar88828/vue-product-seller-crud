<script setup lang="ts">
// import { dataProductDetailServer } from "~/assets/example/product/dataProduct"
import type { ProductDetail } from "~/types/product/item"

const { id } = useRoute().params
const { data, error, pending } = await useFetch(`/api/shop/${id}`)
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
      {{ data?.product }}
      <!-- <PageProductDetail v-show="!pending && !error" :data="data?.product" /> -->
    </template>
  </Suspense>
</template>
