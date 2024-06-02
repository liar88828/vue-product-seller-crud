<template>
  <CardHead
    :title="data.name"
    :class="'text-sm sm:text-md md:text-lg font-bold'"
  />

  <div class="flex justify-between">
    <div class="space-y-1">
      <h4 class="text-sm sm:text-md md:text-lg font-semibold">
        ${{ data.price }}
      </h4>
      <ElRating :rating="3" />
      <p class="font-normal text-xs whitespace-nowrap">{{ 123 }} Sold</p>
    </div>

    <div class="flex items-end">
      <NuxtLink
        :to="`/product/detail/${data.id}`"
        class="btn btn-outline sm:btn-md btn-sm btn-square"
        v-if="detail === false"
      >
        <IconsTrolley class="h-5 w-5" />
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
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"

defineProps<{ data: Product }>()
const detail = defineModel("detail", { required: true })
</script>
