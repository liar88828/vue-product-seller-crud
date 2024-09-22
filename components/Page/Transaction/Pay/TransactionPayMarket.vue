<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <Market v-else :data="data?.market">
    <ElQRBarcode :qrValue="fullUrl" class="bg-white rounded-3xl" />
  </Market>
</template>

<script setup lang="ts">
import Market from "./Market.vue"

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
