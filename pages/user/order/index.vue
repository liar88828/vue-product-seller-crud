<template>
  <NuxtLayout name="user">
    <ElLoading v-if="pending"/>
    <ElError v-else-if="error || !data?.orders"/>
    <!-- @vue-expect-error -->
    <PageMarketConfirm v-else :data="data?.orders"/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
const { data, pending, error } = await useFetch("/api/user/order", {})
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
