<template>
  <div class="flex flex-col justify-between h-full">
    <div class="flex justify-between">
      <div class="">
        <h2 class="text-lg sm:text-2xl md:text-2xl font-bold">
          {{ data.name }}
        </h2>
        <!-- <h3 class="mb-2 sm:my-2 text-xs sm:text-xl font-semibold">
          Electronic Market
        </h3> -->
      </div>
      <NuxtLink
        :to="`#`"
        class="btn sm:btn-outline btn-sm btn-square sm:btn-md flex-nowrap flex"
      >
        <IconsPersonAdd class="w-5 h-5" />
        <!-- <span class="hidden sm:block"> Add </span> -->
      </NuxtLink>
    </div>

    <div class="flex justify-between">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-1">
        <dl class="flex items-center gap-2 justify-between">
          <dt class="text-xs sm:text-lg">Follow</dt>
          <dd class="font-bold text-xs sm:text-sm md:text-lg">
            {{ getNumber(static.follow) }}
          </dd>
        </dl>
        <dl class="flex items-center gap-2 justify-between">
          <dt class="text-xs sm:text-lg">Product</dt>
          <dd class="font-bold text-xs sm:text-sm md:text-lg">
            {{ getNumber(static.product) }}
          </dd>
        </dl>

        <dl class="flex items-center gap-2 justify-between">
          <dt class="text-xs sm:text-lg">Since</dt>
          <dd class="font-bold text-xs sm:text-sm md:text-lg">
            {{ static.since }}
          </dd>
        </dl>

        <dl class="flex items-center gap-2 justify-between">
          <dt class="text-xs sm:text-lg">Response</dt>
          <dd class="font-bold text-xs sm:text-sm md:text-lg">
            {{ static.response }}
          </dd>
        </dl>
      </div>
      <div class="flex items-end">
        <!-- <NuxtLink
        to="#"
        class="btn sm:btn-outline btn-xs sm:btn-sm flex-nowrap flex"
      >
        <IconsPersonAdd class="w-5 h-5" />
        <span class="hidden sm:block"> Add </span>
      </NuxtLink> -->
        <NuxtLink
          :to="`/shop/market/${data.id}`"
          class="btn btn-info btn-sm sm:btn-md flex-nowrap flex btn-square"
        >
          <IconsMarket class="w-5 h-5" />
          <!-- <span class="hidden sm:block"> Visit </span> -->
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MarketStatic } from "~/types/market/profile"
import type { DataPreviewProps } from "~/types/product/DataReview"

defineProps<{
  data: DataPreviewProps
  static: MarketStatic
}>()
</script>
