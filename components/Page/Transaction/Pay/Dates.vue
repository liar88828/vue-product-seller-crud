<template>
  <div class="gap-4">
    <div>
      <h3 class="nota-title">
        <IconsHistory />
        <span> Purchase Information </span>
      </h3>
      <div class="gap-2 flex flex-col">
        <div class="flex items-center justify-between">
          <div class="font-medium">Order Date</div>
          <div>{{ getDate(data.dateBuy) }}</div>
        </div>
        <div class="flex items-center justify-between">
          <div class="font-medium">Expire Delivery Date</div>
          <div>{{ getDate(data.dateBuy) }}</div>
        </div>
        <div class="flex items-center justify-between">
          <div class="font-medium">Promo Code</div>
          <div>{{ data.promoCode }}</div>
        </div>
        <div class="flex items-center justify-between">
          <div class="font-medium">Discount</div>
          <div>{{ getPercent(data.discount) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { OrderProps } from "~/types/product/order"

defineProps<{
  data: OrderProps
}>()
</script>
