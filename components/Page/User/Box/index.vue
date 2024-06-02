<template>
  <CardInit class="card-normal">
    <CardHeadTitle
      title="Customer Review"
      :class="'text-xl sm:text-2xl font-bold'"
    />
    <Review
      v-for="dataPreview in data"
      :data="dataPreview"
      :key="dataPreview.name"
    />
  </CardInit>
</template>

<script lang="ts" setup>
import type { DataPreviewProps } from "~/types/product/DataReview"
import Review from "./Review.vue"

defineProps<{
  data: DataPreviewProps[]
}>()
</script>
