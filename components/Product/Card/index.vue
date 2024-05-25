<template>
  <div class="card card-compact bg-base-100 shadow-xl">
    <figure>
      <img
        alt="Related product"
        class="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
        height="300"
        :src="data.image ?? 'https://picsum.photos/300'"
        width="300"
      />
    </figure>
    <div class="card-body w-40">
      <div class="flex-1 py-4 space-y-2">
        <h3 class="font-semibold tracking-tight">
          {{ data.name }}
        </h3>
        <p class="font-normal text-xs">{{ 123 }} Sold</p>
        <div class="flex justify-between">
          <h4 class="font-semibold text-lg">${{ data.price }}</h4>
          <NuxtLink
            :to="`/product/detail/${data.id}`"
            class="btn btn-outline btn-sm"
            v-if="detail === false"
          >
            <IconsTrolley />
            <span class="sr-only">Add to Favorites</span>
          </NuxtLink>
          <NuxtLink
            to="#"
            class="btn btn-outline btn-sm"
            v-if="detail === true"
          >
            <IconsDetail />
            <span class="sr-only">Add to Favorites</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Product } from "@prisma/client"
// <{
//   data: Product
//   detail?: boolean
// }>
defineProps({
  data: {
    type: Object as PropType<Product>,
    required: true,
  },
  detail: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>
