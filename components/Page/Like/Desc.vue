<template></template>

<script setup lang="ts">
import type { Product } from "@prisma/client"

const props = defineProps<{
  data: Product
  side?: boolean
  detail?: boolean
}>()
</script>
