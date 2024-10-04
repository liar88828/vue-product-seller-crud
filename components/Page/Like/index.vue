<template>
  <CardParentSide :title="'Like'">
    <Item
      v-for="dataProduct in data"
      :data="dataProduct.Product"
      :key="dataProduct.id"
    />
  </CardParentSide>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"
import Item from "./Item.vue"

defineProps<{ data: LikeProduct[] }>()
</script>
