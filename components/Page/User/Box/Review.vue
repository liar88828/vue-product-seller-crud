<template>
  <CardSide :class="' card-compact '">
    <figure>
      <img :src="data.img" :alt="data.name" />
    </figure>
    <CardBody :class="'w-4/5 '">
      <CardHead :title="data.name">
        <ElRating :rating="3" />
      </CardHead>
      <p class="text-xs sm:text-sm line-clamp-2">{{ data.text }}</p>
      <CardActionEnd>
        <span class="text-xs sm:text-sm">{{ getDate(data.time) }}</span>
      </CardActionEnd>
    </CardBody>
  </CardSide>
</template>

<script lang="ts" setup>
import type { DataPreviewProps } from "~/types/product/DataReview"
defineProps<{
  data: DataPreviewProps
}>()
</script>

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
