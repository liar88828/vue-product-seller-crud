<template>
  <h2 class="card-title">{{ data.name }}</h2>
  <div>Qty: {{ data.stock }}</div>

  <ElRating :rating="3" />

  <CardActionBetween class="items-center">
    <h4 class="text-lg sm:text-xl md:text-2xl font-semibold">
      {{ getRupiah(data.price) }}
    </h4>
    <button class="btn btn-outline sm:btn-md btn-sm btn-square">
      <IconsTrash />
      <span class="sr-only">Remove</span>
    </button>
  </CardActionBetween>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"

defineProps<{
  data: Product
}>()
</script>
