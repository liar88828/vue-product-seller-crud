<template>
  <CardParentSide :title="'Trolly'" :right="Trash">
    <CardProductSide
      v-for="dataProduct in data"
      :data="dataProduct"
      :key="dataProduct.id"
    />
    <ProductTrollyTotal
      :total-pay="99.98"
      :total-product="4"
      :total-send="5.99"
    />
    <CardProductSideTotal />
  </CardParentSide>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"
import Trash from "../../Card/Product/Side/Trash.vue"

defineProps<{ data: Product[] }>()
</script>
