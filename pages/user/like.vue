<template>
  <NuxtLayout name="profile">
    <!-- @vue-expect-error -->
    <PageTransactionLike :data="data?.product" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataProducts } from "~/assets/example/product/dataProduct"
import { dataOrders } from "~/assets/example/transaction/dataOrder"
const { data } = await useFetch("/api/user/like")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
