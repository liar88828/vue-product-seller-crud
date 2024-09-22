<template>
  <NuxtLayout name="user">
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data" />
    <PageTransactionOrder v-else :data="data.orders" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// const { id } = useRoute().params
const { data, pending, error } = await useFetch(`/api/transaction/order/user`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
