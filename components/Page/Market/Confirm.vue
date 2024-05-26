<template>
  <ProductTableConfirm :data-product="dataPurchases" />
</template>

<script lang="ts" setup>
import type { Purchase } from "~/types/product/purchase"

defineProps<{
  dataPurchases: Purchase[]
}>()
</script>
