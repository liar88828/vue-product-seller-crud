<template>
  <CardInit :class="'sm:card-normal'" ref="refImage">
    <Market :company="company" />
    <ElDivider />
    <Customer :data="data" />
    <ElDivider />
    <Table :data="data" />
    <Total :data="data" />
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
import Table from "./Table.vue"
import Total from "./Total.vue"
import Customer from "./Customer.vue"
import Market from "./Market.vue"

const { clickImage, refImage } = useImages("purchase")

defineProps<{
  company: ProfileCompany
  data: OrderProps
}>()
</script>
