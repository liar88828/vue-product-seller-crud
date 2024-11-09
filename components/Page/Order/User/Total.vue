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
          <div>{{ getDate(data.createdAt) }}</div>
        </div>
        <div class="flex items-center justify-between">
          <div class="font-medium">Expire Delivery Date</div>
          <div>{{ getDate(data.dateExp) }}</div>
        </div>

        <!-- 
            <div class="flex items-center justify-between">
              <div class="font-medium">Promo Code</div>
              <div>{{ data.promoCode }}</div>
            </div>

            <div class="flex items-center justify-between">
              <div class="font-medium">Discount</div>
              <div>{{ getPercent(data.discount) }}</div>
            </div>
             -->
      </div>
    </div>
  </div>
  <div class="flex justify-between">
    <div className="font-medium">Total Product</div>
    <div className="font-medium">{{ getRupiah(total) }}</div>
  </div>
  <!-- <div class="flex justify-between">
    <div className="total-p2">Discount</div>
    <div className="total-p2 ">{{ getPercent(props.data.discount) }}</div>
  </div>
  <div class="flex justify-between">
    <div className="total-p">Total Pay</div>
    <div className="total-p ">{{ getRupiah(withDiscount) }}</div>
  </div> -->
</template>

<script setup lang="ts">
import type { PayProps } from "~/types/market/order"

const props = defineProps<{
  data: TransactionConfirmClient
}>()

const total = props.data.Trolley.map(
  (t) =>
    // t.price
    t.Product.price * t.qty
).reduce((a, b) => a + b, 0)

// const withDiscount = getDiscount(total, props.data.discount)
</script>
