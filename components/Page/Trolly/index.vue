<template>
  <div class="card bg-base-100">
    <div class="card-body">
      <h1 class="card-title">Shopping Cart</h1>
      <div class="grid gap-6">
        <div class="grid gap-3">
          <PageTrollyProduct v-bind="data2" />
          <PageTrollyProduct v-bind="data" />
          <PageTrollyProduct v-bind="data" />
          <PageTrollyProduct v-bind="data2" />
          <PageTrollyProduct v-bind="data" />
          <PageTrollyProduct v-bind="data2" />
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
import type { ProductItem } from "~/types/product/item"

const data: ProductItem = {
  image: "https://picsum.photos/200",
  name: "Acme Circles T-Shirt",
  price: 49.99,
  stock: 2,
  brand: "Acme",
  typeId: "1",
  id: "1",
  description: "Acme Circles T-Shirt",
  userId: "1",
}
const data2: ProductItem = {
  image: "https://picsum.photos/220",
  name: "Shock",
  price: 443,
  stock: 64,
  brand: "adidasss",
  typeId: "13",
  id: "1234",
  description: "i dont know",
  userId: "112",
}
</script>

<style></style>
