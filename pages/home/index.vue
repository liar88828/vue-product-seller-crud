<template>
  <PageHome
    :data-adv="dataAdv"
    :data-adv2="dataAdv2"
    :data-category="dataCategory"
    :data-products="dataProducts"
  />
</template>

<script lang="ts" setup>
// const Count = resolveComponent("DiscountCount")

import { dataCategory } from "~/assets/link/shopLink"
import { dataAdv, dataAdv2 } from "~/assets/example/home/dataAdv"
import { dataProducts } from "~/assets/example/product/dataProduct"
</script>
