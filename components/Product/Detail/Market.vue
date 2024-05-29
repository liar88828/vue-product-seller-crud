<template>
  <CardSide :class="'card-bordered'">
    <figure>
      <img :src="data.img" :alt="data.name" />
    </figure>
    <CardBody class="w-11/12">
      <div class="flex justify-between h-full">
        <div class="flex flex-col sm:justify-between">
          <div class="sm:flex gap-2 sm:items-center">
            <h2 class="text-md sm:text-2xl md:text-2xl font-bold">
              {{ data.name }}
            </h2>
            <h3 class="mb-2 sm:my-2 text-xs sm:text-xl font-semibold">
              Electronic Market
            </h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <dl class="flex items-center gap-2">
              <dt class="text-xs sm:text-sm">Follow</dt>
              <dd class="font-bold text-xs sm:text-sm md:text-lg">
                {{ getNumber(marketData.follow) }}
              </dd>
            </dl>
            <dl class="flex items-center gap-2">
              <dt class="text-xs sm:text-sm">Product</dt>
              <dd class="font-bold text-xs sm:text-sm md:text-lg">
                {{ getNumber(marketData.product) }}
              </dd>
            </dl>

            <dl class="flex items-center gap-2">
              <dt class="text-xs sm:text-sm">Since</dt>
              <dd class="font-bold text-xs sm:text-sm md:text-lg">
                {{ marketData.since }}
              </dd>
            </dl>

            <dl class="flex items-center gap-2">
              <dt class="text-xs sm:text-sm">Response</dt>
              <dd class="font-bold text-xs sm:text-sm md:text-lg">
                {{ marketData.response }}
              </dd>
            </dl>
          </div>
        </div>
        <div class="flex justify-around flex-col">
          <NuxtLink to="#" class="btn sm:btn-outline btn-xs sm:btn-sm flex-nowrap flex">
            <IconsPersonAdd class="w-5 h-5" />
            <span class="hidden sm:block"> Add </span>
          </NuxtLink>
          <NuxtLink to="/market/profile" class="btn btn-info btn-xs sm:btn-sm flex-nowrap flex">
            <IconsMarket class="w-5 h-5" />
            <span class="hidden sm:block"> Visit </span>
          </NuxtLink>
        </div>
      </div>
    </CardBody>
  </CardSide>
</template>
<script lang="ts" setup>
import type { DataPreviewProps } from "~/types/product/DataReview"
defineProps<{
  data: DataPreviewProps
}>()

const marketData = {
  follow: 44_234_234_223_429,
  product: 44_234_234_223_429,
  since: "2022-11-12",
  response: "100%",
}
</script>
