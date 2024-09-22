<template>
  <section
    :class="[
      'rounded-lg bg-base-100 shadow-sm ',
      isFlex ? 'w-52 shrink-0' : '',
    ]"
  >
    <div class="">
      <figure>
        <img
          alt="Related product"
          class="object-cover w-full flex-shrink aspect-square group-hover:opacity-50 transition-opacity rounded-lg"
          :src="'https://picsum.photos/300'"
          height="300"
          width="300"
        />
      </figure>
    </div>
    <div class="p-2 space-y-1">
      <h2 :class="`font-bold text-sm sm:text-md `">
        {{ getTextSplit(data.name, 35) }} <slot name="title" />
      </h2>
      <!--  -->
      <h1 class="font-semibold text-xl">{{ getRupiah(data.price) }}</h1>

      <section class="flex justify-between items-center">
        <div class="space-y-1">
          <ElRating :rating="3" />

          <p class="text-sm whitespace-nowrap space-x-1">
            <span class="badge badge-primary badge-sm sm:badge-md">
              {{ 123 }}
            </span>
            <span class="text-xs sm:text-sm">Sold</span>
          </p>
        </div>
        <!--  -->
        <div class="flex gap-2 flex-row">
          <NuxtLink to="#" class="btn btn-square sm:btn-sm btn-xs">
            <IconsDetail class="size-5" />
          </NuxtLink>

          <NuxtLink
            :to="`/shop/product/${1}`"
            class="btn btn-square sm:btn-sm btn-xs"
          >
            <IconsTrolley class="size-5" />
          </NuxtLink>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"

defineProps({
  data: {
    type: Object as PropType<Product>,
    required: true,
  },
  isFlex: {
    type: Boolean,
    default: false,
    required: false,
  },
})
</script>
