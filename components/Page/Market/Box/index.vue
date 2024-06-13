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
import type { MarketStatic } from "~/types/profile/profile"
import type { Company } from "@prisma/client"
import Desc from "./Desc.vue"
import Static from "./Static.vue"
import Image from "./Image.vue"
defineProps<{
  data: Company
  static: MarketStatic
}>()
</script>
