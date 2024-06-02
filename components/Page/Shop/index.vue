<template>
  <!-- grid for filter and Product -->
  <section class="grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
    <div class="md:col-span-1 lg:col-span-1">
      <Filter />
    </div>
    <div class="md:col-span-3 lg:col-span-5 xl:col-span-6">
      <PageProductGridShop :data="dataProducts" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"
import Filter from "./Filter.vue"

defineProps<{
  dataProducts: Product[]
}>()
</script>
