<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageMarketProfileEdit v-else :data="data?.market" />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
})
definePageMeta({
  layout: "market",
})
// import { dataCompany } from "~/assets/example/user/dataCompany"

const { data, error, pending } = await useFetch("/api/market/profile/")
watch(data, () => {
  // console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
