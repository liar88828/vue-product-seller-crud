<template>
  <LayCardWrap class="bg-base-100">
    <ProductTableConfirmBody :data-product="dataProduct" />
  </LayCardWrap>
</template>

<script lang="ts" setup>
import type { Purchase } from "~/types/product/purchase"

defineProps<{
  dataProduct: Purchase[]
}>()
</script>
