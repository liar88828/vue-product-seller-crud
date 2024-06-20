<script setup lang="ts">
// import { dataProductDetailServer } from "~/assets/example/product/dataProduct"
// import type { ProductDetail } from "~/types/product/item"

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
      <!-- {{ data?.product }} -->

      <div v-if="pending">Loading...</div>
      <ElError v-else-if="error || !data" text="error" />
      <!-- v-show="!pending && !error" -->
      <PageProductDetail v-else :data="data.product" />
    </template>
  </Suspense>
</template>

<!-- detail: data?.detail, -->
<!-- previews: data?.previews, -->
<!-- relateds: data?.relateds, -->
<!-- market: data?.market, -->
<!-- static: data?.static, -->
