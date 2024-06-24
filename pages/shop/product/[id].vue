<script setup lang="ts">
// defineMid
// import { dataProductDetailServer } from "~/assets/example/product/dataProduct"
// import type { ProductDetail } from "~/types/product/item"

const { id } = useRoute().params
const { data, error, pending } = await useFetch(`/api/shop/product/${id}`)
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
      <ElError v-else-if="error || !data" text="error" />
      <PageProductDetail v-else :data="data.product" />
    </template>
  </Suspense>
</template>

<!-- detail: data?.detail, -->
<!-- previews: data?.previews, -->
<!-- relateds: data?.relateds, -->
<!-- market: data?.market, -->
<!-- static: data?.static, -->
