<template>
  <CardWrap class="space-y-3 static card-bordered">
    <div class="flex justify-between">
      <h2 class="titles">
        Market :
        <span class="font-bold titles"> {{ data.Market.name }}</span>
      </h2>
      <div class="flex flex-nowrap gap-2">
        <span :class="getStatus(data.status)">
          {{ data.status }}
        </span>
        <NuxtLink
          :to="`/product/look/${data.id}`"
          class="btn btn-info sm:btn-sm btn-xs btn-outline"
          >Payment</NuxtLink
        >
      </div>
    </div>
    <slot />
  </CardWrap>
</template>

<script lang="ts" setup>
import type { OrderProps } from "~/types/market/order"

defineProps<{
  data: OrderProps
}>()
</script>
