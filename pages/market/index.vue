<template>
  <!-- <ElLoading v-if="pending" />
  <PageMarketErrorNotRegister v-else-if="error?.message.includes('market')" />
  <ElError v-else-if="error || !data" />
  <PageMarketProfile v-else :data="data?.market" /> -->
  hello
</template>

<script lang="ts" setup>
// definePageMeta({
//   middleware: ["market"],
// })

await navigateTo("/market/profile")
// definePageMeta({
//   layout: "market",
// })

const { data, pending, error } = await useFetch("/api/market/profile")
</script>
