<template>
  <CardInit class="card-normal">
    <CardHeadTitle title="Market" :class="'text-xl sm:text-2xl font-bold'" />
    <Body>
      <Desc :data="data" :static="static" />
    </Body>
  </CardInit>
</template>

<script lang="ts" setup>
import type { MarketStatic } from "~/types/market/profile"
import type { DataPreviewProps } from "~/types/product/DataReview"
import Desc from "./Desc.vue"

defineProps<{
  data: DataPreviewProps
  static: MarketStatic
}>()
</script>
