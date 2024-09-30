<template>
  <ElLoading v-if="pending" />
  <PageMarketErrorNotRegister v-else-if="error?.message" />
  <ErrorNotFound
    v-else-if="data?.products.length === 0"
    :title="'Product is Empty'"
    :description="'Please product in shop '"
    :code="404"
    :linkTitle="'Create'"
    link="/market/product/create"
  />
  <ElError v-else-if="error || !data" />
  <PageMarketProduct v-else :data="data.products" />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
  layout: "market",
})
const { error, data, pending } = await useFetch("/api/product/market")
// console.log(error.value?.message, "--:error bos")
// watch(data, () => {
//   console.log(data.value)
// })
// if (!data.value) {
//   throw new Error("data not found")
// }
</script>
