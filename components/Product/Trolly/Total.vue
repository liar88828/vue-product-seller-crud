<template>
  <div class="grid gap-2">
    <div class="flex items-center justify-between">
      <span class="text-sm font-medium">Subtotal</span>
      <span class="text-sm font-medium">${{ totalPay }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-sm font-medium">Shipping</span>
      <span class="text-sm font-medium">${{ totalSend }}</span>
    </div>
    <div class="divider my-0"></div>
    <div class="flex items-center justify-between">
      <span class="text-lg font-semibold">Total</span>
      <span class="text-lg font-semibold">${{ totalPay }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProductTotal } from "~/types/product/total"

defineProps<ProductTotal>()
</script>
