<template>
  <CardSide :class="' card-compact '" :bg="true">
    <figure>
      <img src="https://picsum.photos/300" :alt="data.id_user" />
    </figure>
    <CardBody :class="'w-4/5 '">
      <CardHead :title="data.user.name ?? ''">
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
import type { Preview } from "@prisma/client"
import type { DataPreview, ProductDetail } from "~/types/product/item"
import type { DataPreviewProps } from "~/types/product/review"
defineProps<{
  data: DataPreview
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
