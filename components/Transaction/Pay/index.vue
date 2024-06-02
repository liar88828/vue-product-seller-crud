<template>
  <CardInit :class="'sm:card-normal'" ref="refImage">
    <TransactionPayInfoMarket :company="company" />
    <EleDivider />
    <TransactionPayInfoCustomer :data="data" />
    <EleDivider />
    <TransactionPayTable :data="data" />
    <TransactionPayTotal :data="data" />
  </CardInit>
  <div class="flex flex-col gap-2 p-5">
    <button @click="() => clickImage" class="btn btn-info w-full">
      Save Image
    </button>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { ProfileCompany } from "~/types/market/profile"
import type { OrderProps } from "~/types/product/order"

const { clickImage, refImage } = useImage("purchase")

defineProps<{
  company: ProfileCompany
  data: OrderProps
}>()
</script>
