<template>
  <div class="card card-compact">
    <div class="card-body bg-base-100 shadow">
      <a class="block" href="#">
        <img
          :src="`${
            product.image ? product.image : 'https://picsum.photos/100'
          }`"
          alt="Product Image"
          width="400/2"
          height="300/2"
          class="w-full h-48 object-cover"
        />
      </a>
      <div class="p-4 space-y-2">
        <h3 class="font-bold text-sm sm:text-md lg:text-lg">
          <a href="#"
            >{{ product.name }}
            <!-- {{ product.brand }} -->
          </a>
        </h3>
        <!-- <p class="text-xs line-clamp-2">
          {{ product.description }}
        </p> -->
        <div class="flex items-center justify-between">
          <div class="flex flex-col">
            <span class="font-semibold text-md sm:text-lg">
              ${{ product.price }}
            </span>
            <span class="font-normal text-xs">
              {{ product.stock }} Sold
            </span>
          </div>
          <button class="btn btn-square btn-xs sm:btn-sm">
            <!-- text-white -->
            <IconsLove class="text-red-500" />
            <span class="sr-only">Add to Favorites</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Product } from "@prisma/client"

defineProps<{ product: Product }>()
</script>
