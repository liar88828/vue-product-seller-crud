<template>
  <!-- sm:w-40 md:w-60 -->
  <Card :class="` ${static && ' static '} ${full ? 'w-full' : 'w-40 '}`">
    <figure>
      <img
        alt="Related product"
        class="object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
        height="300"
        :src="data.image ?? 'https://picsum.photos/300'"
        width="300"
      />
    </figure>
    <!-- 'sm:w-full' -->
    <CardBodyBox :class="''">
      <div class="flex justify-between flex-col h-full">
        <CardHead :title="data.name" />

        <div class="flex justify-between items-center">
          <div class="">
            <h4 class="font-semibold sm:text-lg text-md">${{ data.price }}</h4>
            <p class="font-normal text-xs">{{ 123 }} Sold</p>
          </div>

          <div class="">
            <NuxtLink
              :to="`/product/detail/${data.id}`"
              class="btn btn-outline btn-sm"
              v-if="detail === false"
            >
              <IconsTrolley />
            </NuxtLink>

            <NuxtLink
              to="#"
              class="btn btn-outline btn-sm"
              v-if="detail === true"
            >
              <IconsDetail />
            </NuxtLink>
          </div>
        </div>
      </div>
    </CardBodyBox>
  </Card>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"

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
  full: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>
