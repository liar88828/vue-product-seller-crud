<template>
  <section class="grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
    <div class="md:col-span-1 lg:col-span-2">
      <DropDownProductFilter />
    </div>
    <div class="md:col-span-3 lg:col-span-4 xl:col-span-6">
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl::grid-cols-6 gap-2"
      >
        <CardProductGrid
          v-for="product in dataProducts"
          :data="product"
          :full="true"
          :key="product.id"
          :static="true"
          :full2="true"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"

defineProps<{
  dataProducts: Product[]
}>()
</script>
