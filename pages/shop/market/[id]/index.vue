<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageShopMarketDetail v-else :data="data.profile" />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "shop",
})
const { id } = useRoute().params

const { data, pending, error } = await useMarket().findId(id)
// import { dataProductDetails } from "~/assets/example/product/dataProduct"
</script>
