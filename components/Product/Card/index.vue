<template>
  <div class="card card-compact bg-base-100 card-shadow">
    <div class="card-body w-40">
      <NuxtLink to="#"> </NuxtLink>
      <img
        alt="Related product"
        class="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
        height="300"
        :src="data.img"
        width="300"
      />
      <div class="flex-1 py-4 space-y-2">
        <h3 class="font-semibold tracking-tight">
          {{ data.name }}
        </h3>
        <p class="font-normal text-xs"> {{ 123 }} Sold </p>
        <div class="flex justify-between">
          <h4 class="font-semibold text-lg">${{ data.price }}</h4>
          <button class="btn btn-outline btn-sm">
            <IconsTrolley />
            <span class="sr-only">Add to Favorites</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  data: {
    name: string
    brand: string
    price: number
    img: string
  }
}>()
</script>
