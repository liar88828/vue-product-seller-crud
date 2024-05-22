<template>
  <div class="card card-compact card-bordered bg-base-100 shadow">
    <div class="card-body flex-row">
      <div class="avatar">
        <div class="w-24 rounded-xl">
          <img :src="data.img" :alt="data.name" />
        </div>
      </div>

      <div class="flex-1">
        <h1 class="card-title">{{ data.name }}</h1>
        <div class="flex items-center gap-2 mb-2">
          <RatingReview :rating="5" />
          <span class="text-xs sm:text-sm">{{ data.time }}</span>
        </div>
        <p class="text-xs sm:text-sm line-clamp-2 " >{{ data.text }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  data: {
    name: string
    time: string
    text: string
    img: string
  }
}>()
</script>
