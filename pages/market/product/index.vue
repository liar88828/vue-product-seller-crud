<template>
  <ElLoading v-if="pending" />
  <PageMarketErrorNotRegister v-else-if="error?.message.includes('market')" />
  <ErrorNotFound
    v-else-if="data?.products.length === 0"
    :title="'Product is Empty'"
    :code="404"
    :linkText="'Register'"
    link="/market/profile/create"
  />
  <ElError v-else-if="error || !data" />
  <PageMarketProduct v-else :data="data.products" />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
})
definePageMeta({
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
