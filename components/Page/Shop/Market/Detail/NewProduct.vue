<template>
  <ErrorNotFound v-if="!data?.newProduct" />
  <Products v-else :data="data.newProduct" />
</template>

<script setup lang="ts">
import Products from "./Products.vue"
const props = defineProps<{ profile: MarketClient }>()

const { data } = await useFetch(`/api/shop/market/:id/new-product`, {
  params: {
    id: props.profile.id,
  },
})
</script>
