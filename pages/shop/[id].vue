<script setup lang="ts">
import type { ProductDetail } from "~/types/product/item"

const { id } = useRoute().params
const { data, error } = await useFetch<ProductDetail>(`/api/shop/${id}`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>

<template>
  <!-- @vue-expect-error -->
  <PageProductDetail :data="data" />
</template>
