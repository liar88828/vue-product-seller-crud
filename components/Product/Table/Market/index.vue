<template>
  <CardInit class="bg-base-100">
    <ProductTableMarketOption />
    <ProductTableMarketTables :dataProduct="newData" />
  </CardInit>
</template>

<script lang="ts" setup>
import type { ProductItem } from "~/types/product/item"
const props = defineProps<{ data: ProductItem[] }>()

const { filter } = useMarket()
const newData = computed(() => filter(props.data))
</script>
