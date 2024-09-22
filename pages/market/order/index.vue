<template>
  <NuxtLayout name="market">
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data" />
    <PageMarketConfirm v-else :data="data?.confirms" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
const { data, pending, error } = await useFetch("/api/transaction/confirm", {})
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
