<template>
  <CardInit class="card-normal bg-base-100/70">
    <CardHeadTitle title="Market" :class="'text-xl sm:text-2xl font-bold'" />
    <Body>
      <Desc :data="data" :static="static" />
    </Body>
  </CardInit>
</template>

<script lang="ts" setup>
import type { MarketStatic } from "~/types/profile/profile"
import type { DataPreviewProps } from "~/types/product/DataReview"
import Desc from "./Desc.vue"

defineProps<{
  data: DataPreviewProps
  static: MarketStatic
}>()
</script>
