<template>
  <NuxtLayout name="market">
    <!-- @vue-expect-error -->
    <PageTransactionOrder :data="data?.history" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
const { data } = await useFetch("/api/market/history")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
