<template>
  <NuxtLayout name="market">
    <div v-if="pending">Loading ...</div>
    <div v-else-if="!data">Data Is Not Found ...</div>
    <PageMarketConfirm v-else :data="data" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
import type { DataMarket } from "~/types/market/confirm"
const { data, pending } = await useFetch("/api/market/confirm/", {
  // pick: ["market"],
  transform: (data) => data.market,
})
// .then((res) => {
//   return {
//     data: res.data,
//     pending: res.pending,
//   }
// })
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
