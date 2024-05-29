<script lang="ts" setup>
import type { ProductItem } from "~/types/product/item"

defineProps<{ data: ProductItem }>()
</script>
<template>
  <section class="flex flex-col gap-6">
    <LayCardWrap class="bg-base-100">
      <div>
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold">
          {{ data.name }}
        </h1>
        <p class="mt-2 text-sm sm:text-md md:text-lg">
          {{ data.description }}
        </p>
      </div>

      <div class="grid gap-4">
        <div
          class="flex items-center gap-2 font-semibold text-sm sm:text-md md:text-lg"
          v-for="item in data.spec_good"
          :key="item"
        >
          <IconsCheck class="w-5 h-5 fill-primary" />
          <span>{{ item }}</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <NuxtLink :to="'/product/checkout/' + data.id" class="btn btn-info">
          <IconsSell class="w-5 h-5 mr-2" /> Buy Now
        </NuxtLink>
        <button class="btn btn-outline">Add to Cart</button>
      </div>
    </LayCardWrap>
  </section>
</template>
