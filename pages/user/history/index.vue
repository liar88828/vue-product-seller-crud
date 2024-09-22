<template>
  <NuxtLayout name="user">
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data" />
    <PageMarketHistory v-else :data="data.histories" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { data, pending, error } = await useFetch("/api/transaction/history/user")
// watch(data, () => {
//   console.log(data.value)
// })
// if (!data.value) {
//   throw new Error("data not found")
// }
</script>
