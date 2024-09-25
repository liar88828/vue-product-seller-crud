<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="!data || !data.orders" />
  <PageTransactionOrder v-else :data="data?.orders" />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "user",
})
const { data, pending, error } = await useFetch(
  "/api/transaction/history/user/order"
)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
