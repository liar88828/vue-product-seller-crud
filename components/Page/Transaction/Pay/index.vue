<template>
  <div ref="refImage">
    <CardInit :class="'sm:card-normal'">
      <TransactionPayMarket :data="data" :fullUrl="fullUrl" />

      <ElDivider class="my-0" />
      <Customer :data="data.order" />
      <ElDivider class="my-0" />
      <Dates :data="data.order" />
      <ElDivider class="my-0" />
      <Table :data="data.order" />
      <ElDivider class="my-0" />
      <Total :data="data.order" />
    </CardInit>
  </div>

  <div class="flex flex-col gap-2 p-5">
    <button @click="clickImage" class="btn btn-info w-full">Save Image</button>
    <slot />
  </div>
</template>

<script setup lang="ts">
import Table from "./Table.vue"
import Total from "./Total.vue"
import Customer from "./Customer.vue"
import Market from "./MarketQr.vue"
import Dates from "./Dates.vue"
import type { PayProps } from "~/types/market/order"
import TransactionPayMarket from "./TransactionPayMarket.vue"
defineProps<{ data: PayProps }>()
const route = useRoute()
let url = ""
onMounted(() => {
  if (process.client) {
    url = window.location.host
  }
})
const fullUrl = computed(() => `https://${url}${route.fullPath}`)
const { clickImage, refImage } = useImages("purchase")
</script>
