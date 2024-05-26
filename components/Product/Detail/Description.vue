<script lang="ts" setup>
import type { ProductItem } from "~/types/product/item"

defineProps<{ data: ProductItem }>()
</script>
<template>
  <section class="flex flex-col gap-6">
    <LayCardWrap class="bg-base-200">
      <div>
        <h1 class="text-2xl sm:text-3xl md:text-5xl font-bold">
          {{ data.name }}
        </h1>
        <p class="mt-2 text-sm sm:text-md">
          {{ data.description }}
        </p>
      </div>

      <div class="grid gap-4">
        <div
          class="flex items-center gap-2"
          v-for="item in data.spec_good"
          :key="item"
        >
          <IconsCheck class="w-5 h-5 fill-primary" />
          <span>{{ item }}</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <button class="btn btn-info">Add to Cart</button>
        <button class="btn btn-outline">
          <IconsLove class="w-5 h-5 mr-2" />
          Save for Later
        </button>
      </div>
    </LayCardWrap>
  </section>
</template>
