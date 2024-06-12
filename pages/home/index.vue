<template>
  <div v-if="pending">Loading comments...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <!-- @vue-skip -->
  <PageHome
    :data-adv="dataAdv"
    :data-adv2="dataAdv2"
    :data-category="dataCategory"
    :data-trending="data?.trending"
    :data-best-sellers="data?.bestProduct"
    :data-new-products="data?.newProduct"
  />
</template>

<script lang="ts" setup>
// const Count = resolveComponent("DiscountCount")

import { dataCategory } from "~/assets/link/shopLink"
import { dataAdv, dataAdv2 } from "~/assets/example/home/dataAdv"
import { dataProducts } from "~/assets/example/product/dataProduct"

const { data, pending, error, refresh, status } = await useFetch(
  "/api/home",
  {}
)
// console.log(status)

watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
