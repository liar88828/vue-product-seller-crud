<template>
  <div>Product</div>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"

defineProps<{
  data: Product[]
}>()
</script>
