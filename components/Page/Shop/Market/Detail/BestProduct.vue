<template>
  <ErrorNotFound v-if="!data?.bestProduct" />
  <Products v-else :data="data.bestProduct" />
</template>

<script setup lang="ts">
import Products from "./Products.vue"
const props = defineProps<{ profile: MarketClient }>()

const { data } = await useFetch(`/api/shop/market/:id/best-product`, {
  params: {
    id: props.profile.id,
  },
})
</script>
