<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageMarketConfirm v-else :data="data.orders" />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "user",
})
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
const { data, pending, error } = await useFetch("/api/transaction/order/user")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
