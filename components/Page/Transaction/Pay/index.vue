<template>
  <div ref="refImage">
    <CardInit :class="'sm:card-normal'">
      <Market :company="company">
        <ElQRBarcode :qrValue="fullUrl" class="bg-white rounded-3xl" />
      </Market>
      <ElDivider class="my-0" />
      <Customer :data="data" />
      <ElDivider class="my-0" />
      <Dates :data="data" />
      <ElDivider class="my-0" />
      <Table :data="data" />
      <ElDivider class="my-0" />
      <Total :data="data" />
    </CardInit>
  </div>
  <div class="flex flex-col gap-2 p-5">
    <button @click="clickImage" class="btn btn-info w-full">Save Image</button>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { ProfileCompany } from "~/types/profile/profile"
import Table from "./Table.vue"
import Total from "./Total.vue"
import Customer from "./Customer.vue"
import Market from "./Market.vue"
import Dates from "./Dates.vue"
import type { OrderProps } from "~/types/market/order"
defineProps<{
  company: ProfileCompany
  data: OrderProps
}>()
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
