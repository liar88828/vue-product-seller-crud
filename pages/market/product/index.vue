<template>
  <NuxtLayout name="market">
    <ElLoading v-if="pending"/>
    <ElError v-else-if="error || !data"/>
    <PageProductMarketAll v-else :data="data.products"/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
// import { dataProductDetails } from "~/assets/example/product/dataProduct"
const { error, data, pending, } = await useFetch("/api/market/product")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
