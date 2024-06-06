<script setup lang="ts">
import { dataProducts } from "~/assets/example/product/dataProduct"
const totalTrolly = computed(() => dataProducts.length)
const totalPrice = computed(() => dataProducts.reduce((a, b) => a + b.price, 0))
</script>

<template>
  <div class="dropdown dropdown-end z-40 sm:mt-2 mt-2">
    <ElDropDownIconNew index="1" indicator="2">
      <IconsTrolley class="icons" />
    </ElDropDownIconNew>

    <div
      tabindex="1"
      class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
    >
      <div class="card-body">
        <span class="font-bold text-lg">{{ totalTrolly }} Items</span>
        <span class="text-info">Subtotal: {{ getRupiah(totalPrice) }}</span>
        <div class="card-actions">
          <NuxtLink to="/user/trolly" class="btn btn-primary btn-block"
            >View cart</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
