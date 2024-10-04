<template>
  <ErrorNotFound v-if="!data?.discount" />
  <Products v-else :data="data.discount" />
</template>

<script setup lang="ts">
import Products from "./Products.vue"
const props = defineProps<{ profile: MarketClient }>()

const { data } = await useFetch(`/api/shop/market/:id/discount-product`, {
  params: {
    id: props.profile.id,
  },
})
</script>
