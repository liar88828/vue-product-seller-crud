<template>
  <CardParentSide :title="'Like'">
    <PageProductModelSide
      v-for="dataProduct in data"
      :data="dataProduct.Product"
      :key="dataProduct.id"
    />
  </CardParentSide>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"

defineProps<{ data: LikeProduct[] }>()
</script>
