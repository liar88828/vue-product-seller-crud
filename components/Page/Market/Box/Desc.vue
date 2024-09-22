<template>
  <div class="flex flex-row justify-between h-full gap-5">
    <div class="flex-auto">
      <slot />
    </div>

    <div class="flex flex-col justify-between">
      <NuxtLink
        :to="`#`"
        class="btn sm:btn-outline btn-sm btn-square sm:btn-md flex-nowrap flex"
      >
        <IconsPersonAdd class="w-5 h-5" />
      </NuxtLink>
      <NuxtLink
        :to="`/shop/market/${data.id}`"
        class="btn btn-info btn-sm sm:btn-md flex-nowrap flex btn-square"
      >
        <IconsMarket class="w-5 h-5" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: MarketClient
}>()
</script>
