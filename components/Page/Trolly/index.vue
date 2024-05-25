<template>
  <div class="card bg-base-100">
    <div class="card-body">
      <h1 class="card-title">Shopping Cart</h1>
      <div class="space-y-3">
        <div class="space-y-3">
          <PageTrollyProduct
            v-for="dataProduct in dataPurchase.trolly"
            :key="dataProduct.id"
            :data="dataProduct"
          />
        </div>

        <PageTrollyTotal
          :total-pay="99.98"
          :total-product="4"
          :total-send="5.99"
        />
      </div>
      <div class="card-actions justify-between">
        <button class="btn btn-outline btn-sm">Continue Shopping</button>
        <button class="btn btn-info btn-sm">Proceed to Checkout</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { dataPurchase } from "~/assets/example/dataPurchase"
</script>
