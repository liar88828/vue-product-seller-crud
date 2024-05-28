<template>
  <Card>
    <ProductTableConfirmBody :data-product="dataProduct" />
  </Card>
</template>

<script lang="ts" setup>
import type { Purchase } from "~/types/product/purchase"

defineProps<{
  dataProduct: Purchase[]
}>()
</script>
