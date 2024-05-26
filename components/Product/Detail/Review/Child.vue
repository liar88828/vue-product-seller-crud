<template>
  <!-- <div class="card card-side bg-base-100 shadow-xl">
    <figure>
      <img :src="data.img" :alt="data.name" />
    </figure>
    <div class="card-body">
      <h1 class="card-title">{{ data.name }}</h1>
      <div class="flex items-center gap-2 mb-2">
        <ProductDetailRating :rating="3" />
        <span class="text-xs sm:text-sm">{{ getDate(data.time) }}</span>
      </div>
      <p class="text-xs sm:text-sm line-clamp-2">{{ data.text }}</p>
    </div>
  </div>
 -->

  <div class="card card-side bg-base-100 shadow-xl">
    <figure>
      <img :src="data.img" :alt="data.name" />
    </figure>
    <div class="card-body w-4/5">
      <div class="flex items-center gap-2 justify-between">
        <h2 class="text-xl font-bold">{{ data.name }}</h2>
        <ProductDetailRating :rating="3" />
      </div>
      <p class="text-xs sm:text-sm line-clamp-2">{{ data.text }}</p>
      <div class="flex justify-end">
        <span class="text-xs sm:text-sm">{{ getDate(data.time) }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { DataPreviewProps } from "~/types/product/DataReview"
const { getDate } = useDate()
defineProps<{
  data: DataPreviewProps
}>()
</script>
