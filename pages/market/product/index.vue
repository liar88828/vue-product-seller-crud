<template>
  <NuxtLayout name="market">
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data" />
    <PageMarketProduct v-else :data="data.products" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { error, data, pending } = await useFetch("/api/product/market")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
