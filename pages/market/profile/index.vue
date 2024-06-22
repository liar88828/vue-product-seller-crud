<template>
  <NuxtLayout name="market">
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data" />
    <!-- @vue-expect-error -->
    <PageProfileMarket v-else :data="data?.market" />
  </NuxtLayout>
</template>
<script lang="ts" setup>
const { data, pending, error } = await useFetch("/api/market/profile")

// const { data: check } = await useFetch("/api/market/profile/check")
// console.log(data.value, "market profile check")
// if (check.value) {
//   if (check.value.market.create) {
//     await navigateTo("/market/profile")
//   } else {
//     await navigateTo("/market/create")
//   }
// }
</script>
