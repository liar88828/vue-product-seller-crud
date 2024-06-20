<template>
  <div class="flex justify-between">
    <div className="total-p2">Total Product</div>
    <div className="total-p2 ">{{ getRupiah(total) }}</div>
  </div>
  <div class="flex justify-between">
    <div className="total-p2">Discount</div>
    <div className="total-p2 ">{{ getPercent(props.data.discount) }}</div>
  </div>
  <div class="flex justify-between">
    <div className="total-p">Total Pay</div>
    <div className="total-p ">{{ getRupiah(withDiscount) }}</div>
  </div>
</template>

<script setup lang="ts">
import type { PayProps } from "~/types/market/order"

const props = defineProps<{
  data: PayProps["order"]
}>()
const total = props.data.Box.map((t) => t.price * t.qty).reduce(
  (a, b) => a + b,
  0
)

const withDiscount = getDiscount(total, props.data.discount)
</script>
