<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <MarketQr v-else :data="data?.market" :full-url="fullUrl" />
</template>

<script setup lang="ts">
import MarketQr from "./MarketQr.vue"

defineProps<{
  data: any
  fullUrl: any
}>()

const { id } = useRoute().params
const { data, pending, error } = await useFetch("/api/market/pay/:id", {
  params: {
    id,
  },
})
</script>
