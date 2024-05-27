<template>
  <LayCardWrap class="bg-base-100">
    <ProductTableMarketOption />
    <ProductTableMarketBody :data-product="data" />
  </LayCardWrap>
</template>

<script lang="ts" setup>
import type { ProductItem } from "~/types/product/item"
defineProps<{
  data: ProductItem[]
}>()
</script>
