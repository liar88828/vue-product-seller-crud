<template>
  <CardInit class="card-compact bg-base-100/70">
    <CardHeadTitle title="Market" :class="'text-xl sm:text-2xl font-bold'" />
    <Image>
      <Desc :data="data">
        <h2 class="text-md sm:text-xl md:text-2xl font-bold mb-2">
          {{ data.name }}
        </h2>
        <Static :static="static" />
      </Desc>
    </Image>
  </CardInit>
</template>

<script lang="ts" setup>
import Desc from "./Desc.vue"
import Static from "./Static.vue"
import Image from "./Image.vue"
import type { Market } from "@prisma/client"
import type { MarketStatic } from "~/types/market/ProfileCompany"
defineProps<{
  data: Market
  static: MarketStatic
}>()
</script>
