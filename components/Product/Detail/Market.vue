<template>
  <div class="card card-side bg-base-100 shadow-xl">
    <figure>
      <img :src="data.img" :alt="data.name" />
    </figure>
    <div class="card-body w-4/5">
      <div class="flex items-center gap-2 justify-between">
        <h2 class="text-xl font-bold">{{ data.name }}</h2>
        <IconsPersonAdd class="w-5 h-5" />
      </div>
      <p class="text-xs sm:text-sm line-clamp-2">Good Market</p>
      <NuxtLink to="/market/profile" class="btn btn-info">Go Market</NuxtLink>
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
