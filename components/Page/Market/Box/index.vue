<template>
  <CardInit class="card-normal bg-base-100/70">
    <CardHeadTitle title="Market" :class="'text-xl sm:text-2xl font-bold'" />
    <Body>
      <Desc :data="data">
        <Static :static="static" />
      </Desc>
    </Body>
  </CardInit>
</template>

<script lang="ts" setup>
import type { MarketStatic } from "~/types/profile/profile"
import type { DataPreviewProps } from "~/types/product/review"
import Desc from "./Desc.vue"
import type { Company } from "@prisma/client"
import Static from "./Static.vue"

// data: DataPreviewProps
defineProps<{
  data: Company
  static: MarketStatic
}>()
</script>
