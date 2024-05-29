<template>
  <!-- sm:w-40 md:w-60 -->
  <Card :class="styleCard" :compact="true">
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
    <!-- border border-red-700 -->
    <CardBodyBox
      :class="`${
        full2 ? 'w-full ' : ' w-[13vh] sm:w-[14vh] md:w-full '
      } border border-base-300  `"
    >
      <div class="flex justify-between flex-col h-full">
        <CardHead
          :title="data.name"
          :class="'text-sm sm:text-md md:text-lg font-bold'"
        />

        <div class="flex justify-between items-center ">
          <div class="">
            <h4 class="font-semibold text-xs sm:text-md sm:text-lg">
              ${{ data.price }}
            </h4>
            <p class="font-normal text-xs">{{ 123 }} Sold</p>
          </div>

          <div class=" flex h-full items-end">
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

const styleCard = computed(() => {
  return `
  ${props.static ? " static " : ""}
  ${props.full ? " w-full " : " w-40"}
 
  `
})
// console.log(props.full,'is full')
</script>
