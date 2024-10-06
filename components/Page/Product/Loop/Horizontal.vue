<template>
  <div class="">
    <section class="flex justify-between mb-2">
      <div class="text-lg font-bold">
        <!-- {{ title }} -->
        New Products
      </div>
      <button @click="() => {}" class="btn btn-sm">See more</button>
    </section>
    <div class="flex flex-row gap-2 overflow-x-auto">
      <PageProductItem v-for="item in data" :data="item" :isFlex="true" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"

defineProps<{
  data: Product[]
}>()
</script>
