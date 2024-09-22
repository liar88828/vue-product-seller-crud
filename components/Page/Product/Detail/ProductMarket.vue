<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageMarketBox v-else :market="data.marketStatic.market">
    <PageStatics :static="data.marketStatic.static" />
  </PageMarketBox>
</template>

<script lang="ts" setup>
const { data, error, pending } = await useFetch("/api/market/statics/:id", {
  params: {
    id: 1,
  },
})
</script>
