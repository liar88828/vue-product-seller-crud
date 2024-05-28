<template>
  <Card>
    <CardBody>
      <CardHead title="Shopping Cart" />
      <div class="space-y-3">
        <div class="space-y-3">
          <ProductCardHorizonTrolly
            v-for="dataProduct in data"
            :key="dataProduct.id"
            :data="dataProduct"
          />
        </div>

        <ProductTrollyTotal
          :total-pay="99.98"
          :total-product="4"
          :total-send="5.99"
        />
      </div>
      <CardActionBetween>
        <NuxtLink to="/shop" class="btn btn-outline btn-sm"
          >Continue Shopping</NuxtLink
        >
        <NuxtLink :to="'/product/pay/' + 1" class="btn btn-info btn-sm"
          >Proceed to Checkout</NuxtLink
        >
      </CardActionBetween>
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"

defineProps<{ data: Product[] }>()
</script>
