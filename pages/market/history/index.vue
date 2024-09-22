<template>
  <NuxtLayout name="market">
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data" />
    <PageMarketHistory v-else :data="data.histories" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
const { data, error, pending } = await useFetch("/api/transaction/history")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
