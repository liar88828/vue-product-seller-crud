<template>
  <NuxtLayout name="market">
    <div v-if="pending">Loading ...</div>
    <div v-else-if="!data?.confirm">Data Is Not Found ...</div>
    <!-- @vue-expect-error -->
    <PageMarketConfirm v-else :data="data.confirm" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
const { data, pending } = await useFetch(
  "/api/market/confirm/"
  // {
  // pick: ["market"],
  // transform: (data) => data.market,
  // }
)
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
