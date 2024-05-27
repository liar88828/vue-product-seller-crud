<template>
  <div class="flex items-center gap-4 shadow bg-base-200">
    <img
      :src="`${data.image ? data.image : 'https://picsum.photos/100'}`"
      width="80"
      height="80"
      alt="Product_"
      class="rounded-md"
      style="aspect-ratio: 80 / 80; object-fit: cover"
    />
    <div class="flex-1 grid gap-1">
      <div class="flex gap-2">
        <h3 class="font-bold">{{ data.name }}</h3>
        <h4>{{ data.brand }}</h4>
      </div>
      <div class="flex text-sm justify-between sm:justify-normal gap-5">
        <div>Qty: {{ data.stock }}</div>
        <div>${{ data.price }}</div>
      </div>
    </div>

    <button class="btn btn-square mx-2">
      <IconsTrash />
      <span class="sr-only">Remove</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"

defineProps<{ data: Product }>()
</script>
