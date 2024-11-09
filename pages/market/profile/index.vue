<template>
  <ElLoading v-if="pending" />
  <ErrorNotRegister v-else-if="error" />
  <ElError v-else-if="!data" />
  <PageMarketProfile v-else :data="data?.market" />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
  layout: "market",
})
const { data, pending, error } = await useMarket().findBySession()
</script>
