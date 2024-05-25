<template>
  <section class="card card-compact bg-base-100 static">
    <div class="card-body">
      <NuxtLink class="inset-0 z-10" to="#">
        <span class="sr-only">View</span>
      </NuxtLink>
      <img
        alt="Related product"
        class="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
        height="300"
        :src="data.image ?? 'https://picsum.photos/300'"
        width="300"
      />
      <div class="flex-1 py-4">
        <h3 class="font-semibold tracking-tight">
          {{ data.name }}
        </h3>
        <h4 class="font-semibold">${{ data.price }}</h4>
        <span class="font-normal text-xs"> {{ 123 }} Sold </span>
        <button class="btn btn-square btn-xs sm:btn-sm">
          <!-- text-white -->
          <IconsLove class="text-red-500" />
          <span class="sr-only">Add to Favorites</span>
        </button>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import type { Product } from "@prisma/client"

defineProps<{
  data: Product
}>()
</script>
