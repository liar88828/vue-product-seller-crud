<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageHistoryMarket v-else :data="data.histories" />
</template>

<script lang="ts" setup>
const { data, error, pending } = await useHistoryMarket().findAll()
definePageMeta({
  middleware: ["market"],
  layout: "market",
})
</script>
