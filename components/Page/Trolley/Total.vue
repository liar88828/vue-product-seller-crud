<template>
  <div class="grid gap-2">
    <!-- <div class="flex items-center justify-between">
      <span class="text-sm font-medium">Subtotal</span>
      <span class="text-sm font-medium">{{ getRupiah(totalPay) }}</span>
    </div> -->
    <!-- <div class="flex items-center justify-between">
      <span class="text-sm font-medium">Shipping</span>
      <span class="text-sm font-medium">{{ getRupiah(totalSend) }}</span>
    </div> -->
    <div class="divider my-0"></div>
    <div class="flex items-center justify-between">
      <span class="text-lg font-semibold">Total</span>
      <span class="text-lg font-semibold">
        {{
          getRupiah(
            calculateTrolley(data)
            // dataTotalPays
          )
        }}
      </span>
    </div>
  </div>
  <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
    <NuxtLink :to="`/transaction/checkout/`" class="btn btn-info btn-sm">
      Proceed to Checkout</NuxtLink
    >
    <NuxtLink to="/transaction/checkout/" class="btn btn-sm"
      >Continue Shopping</NuxtLink
    >
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  data: NewTolleyProps[]
}>()
const { calculateTrolley } = useTrolley()
</script>
