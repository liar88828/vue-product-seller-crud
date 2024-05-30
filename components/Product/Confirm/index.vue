<template>
  <CardInit :title="'Confirm'">
    <ProductConfirmTable :data-product="dataProduct" />
  </CardInit>
</template>

<script lang="ts" setup>
import type { Purchase } from "~/types/product/purchase"

defineProps<{
  dataProduct: Purchase[]
}>()
</script>
