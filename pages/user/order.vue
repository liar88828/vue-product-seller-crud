<template>
  <NuxtLayout name="profile">
    <!-- @vue-expect-error -->
    <PageTransactionOrder :data="data?.order" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataOrders } from "~/assets/example/transaction/dataOrder"
const { data } = await useFetch("/api/user/order")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
