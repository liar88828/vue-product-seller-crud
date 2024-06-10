<template>
  <CardInit :title="'Confirm'">
    <PageMarketConfirmTable :data-product="dataPurchases" />
  </CardInit>
</template>

<script lang="ts" setup>
import type { DataMarket } from "~/types/market/confirm"
// import type { OrderProps } from "~/types/product/order"

defineProps<{
  dataPurchases: DataMarket[]
}>()
</script>
