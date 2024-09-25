<template>
  <NuxtLayout name="market">
    <ElLoading v-if="pending" />
    <PageMarketErrorNotRegister v-else-if="error?.message.includes('market')" />
    <ErrorNotFound
      v-else-if="data?.confirms.length === 0"
      :title="'Product is Empty'"
      :code="404"
      :linkText="'Register'"
      link="/market/profile/create"
    />
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
