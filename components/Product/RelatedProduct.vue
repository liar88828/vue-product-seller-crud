<template>
  <section class="card card-compact">
    <div class="card-body bg-base-100">
      <NuxtLink class="inset-0 z-10" to="#">
        <span class="sr-only">View</span>
      </NuxtLink>
      <img
        alt="Related product"
        class="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
        height="300"
        :src="data.img"
        width="300"
      />
      <div class="flex-1 py-4">
        <h3 class="font-semibold tracking-tight">
          {{ data.name }}
        </h3>
        <!-- <small class="text-sm leading-none">{{ data.brand }}</small> -->
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
defineProps<{
  data: {
    name: string
    brand: string
    price: number
    img: string
  }
}>()
</script>
