<template>
  <h1 title="Market" :class="'text-xl sm:text-2xl font-bold'" />
  <Image>
    <div class="flex flex-row justify-between h-full">
      <div class="flex-auto">
        <h2 class="text-md sm:text-xl md:text-2xl font-bold mb-2">
          {{ market.name }}
        </h2>
      </div>
      <div class="flex flex-row gap-2">
        <NuxtLink
          :to="`#`"
          class="btn sm:btn-outline btn-sm btn-square sm:btn-md flex-nowrap flex"
        >
          <IconsPersonAdd class="size-5" />
        </NuxtLink>
        <NuxtLink
          :to="`/shop/market/${market.id}`"
          class="btn btn-info btn-sm sm:btn-md flex-nowrap flex btn-square"
        >
          <IconsMarket class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
    <slot />
  </Image>
</template>

<script lang="ts" setup>
import Image from "./Image.vue"

defineProps<{
  market: MarketClient
}>()
</script>
