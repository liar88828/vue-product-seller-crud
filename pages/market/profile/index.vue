<template>
  <ElLoading v-if="pending" />
  <PageMarketErrorNotRegister v-else-if="error?.message.includes('market')" />
  <ElError v-else-if="error || !data" />
  <PageMarketProfile v-else :data="data?.market" />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
})
definePageMeta({
  layout: "market",
})

const { data, pending, error } = await useFetch("/api/market/profile")
console.log(data)
// const { session } = useUserSession()
// if (session.value.session.createMarket) {
//   throw navigateTo("/market/profile/create")
// }
</script>
