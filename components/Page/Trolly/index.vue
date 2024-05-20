<template>
  <div class="card bg-base-100">
    <div class="card-body">
      <h1 class="card-title">Shopping Cart</h1>
      <div class="grid gap-6">
        <div class="grid gap-3">
          <PageTrollyProduct
            name="Acme Circles T-Shirt"
            size="M"
            :qty="2"
            :price="49.99"
            image="https://picsum.photos/100"
          />
          <PageTrollyProduct
            name="Acme Circles T-Shirt"
            size="M"
            :qty="2"
            :price="49.99"
            image="https://picsum.photos/200"
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

<script lang="ts" setup></script>

<style></style>
