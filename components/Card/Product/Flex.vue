<template>
  <!-- sm:w-40 md:w-60 -->
  <Card :class="'card-bordered '">
    <figure>
      <img
        alt="Related product"
        class="object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
        height="300"
        :src="data.image ?? 'https://picsum.photos/300'"
        width="300"
      />
    </figure>
    <CardBodyBox :class="'w-[14vh] sm:w-[15vh] md:w-[18vh]'">
      <div :class="`flex justify-between flex-col h-full`">
        <CardHead
          :title="data.name"
          :class="'text-sm sm:text-md md:text-lg font-bold'"
        />

        <div class="flex justify-between">
          <div class="">
            <h4 class="text-sm sm:text-md md:text-lg font-semibold">
              ${{ data.price }}
            </h4>
            <p class="font-normal text-xs whitespace-nowrap">{{ 123 }} Sold</p>
          </div>

          <div class="flex items-end">
            <NuxtLink
              :to="`/product/detail/${data.id}`"
              class="btn btn-outline sm:btn-sm btn-xs btn-square"
              v-if="detail === false"
            >
              <IconsTrolley />
            </NuxtLink>

            <NuxtLink
              to="#"
              class="btn btn-outline sm:btn-sm btn-xs"
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

const props = defineProps({
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
  full2: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>
