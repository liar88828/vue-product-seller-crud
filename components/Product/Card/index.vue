<template>
  <div
    :class="`card card-compact bg-base-100 w-40 sm:w-52 md:w-60 shadow-xl ${
      static && 'static'
    }`"
  >
    <figure>
      <!-- rounded-lg -->
      <img
        alt="Related product"
        class="object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
        height="300"
        :src="data.image ?? 'https://picsum.photos/300'"
        width="300"
      />
    </figure>
    <div class="card-body w-40">
      <div class="">
        <h3 class="font-bold sm:text-lg text-md">
          {{ data.name }}
        </h3>

        <div class="flex justify-between items-center">
          <div class="">
            <h4 class="font-semibold sm:text-lg text-md">${{ data.price }}</h4>
            <p class="font-normal text-xs">{{ 123 }} Sold</p>
          </div>

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
  static: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>
