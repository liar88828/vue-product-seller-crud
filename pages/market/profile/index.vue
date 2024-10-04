<template>
  <ElLoading v-if="pending" />
  <PageMarketErrorNotRegister v-else-if="error" />
  <ElError v-else-if="!data" />
  <PageMarketProfile v-else :data="data?.market" />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "market",
})
const { data, pending, error } = await useMarket().findBySession()
</script>
