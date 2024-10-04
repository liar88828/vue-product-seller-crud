<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageMarketBox v-else :market="data.marketStatic.market">
    <PageStatics :static="data.marketStatic.static" />
  </PageMarketBox>
</template>

<script lang="ts" setup>
const props = defineProps<{ id_market: number; id_product: number }>()
const { data, error, pending } = await useFetch("/api/market/statics/:id", {
  params: {
    id_market: props.id_market,
    id_product: props.id_product,
  },
})
</script>
