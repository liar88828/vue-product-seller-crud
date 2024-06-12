<template>
  <div class="flex flex-col justify-between h-full">
    <div class="flex justify-between">
      <div class="">
        <h2 class="text-md sm:text-xl md:text-2xl font-bold">
          {{ data.name }}
        </h2>
      </div>
      <NuxtLink
        :to="`#`"
        class="btn sm:btn-outline btn-sm btn-square sm:btn-md flex-nowrap flex"
      >
        <IconsPersonAdd class="w-5 h-5" />
      </NuxtLink>
    </div>

    <div class="flex justify-between">
      <slot />

      <div class="flex items-end">
        <NuxtLink
          :to="`/market/${data.id}`"
          class="btn btn-info btn-sm sm:btn-md flex-nowrap flex btn-square"
        >
          <IconsMarket class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MarketStatic } from "~/types/profile/profile"
import type { DataPreviewProps } from "~/types/product/review"
import type { Company } from "@prisma/client"
import Static from "./Static.vue"

defineProps<{
  data: Company
  // static: MarketStatic
}>()
</script>
