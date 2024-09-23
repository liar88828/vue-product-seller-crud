<template>
  <CardParentSide :title="'Trolly'" :right="Trash">
    <ElError v-if="!data" text="error" />
    <PageProductModelSide
      v-else
      v-for="item in data"
      :data="item"
      :key="item?.id"
    />
    <Total :total-pay="99.98" :total-product="4" :total-send="5.99" />
    <PageProductModelSideTotal />
  </CardParentSide>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"
import Total from "./Total.vue"
import Trash from "~/components/Icons/Trash.vue"
import type { TrollyAllService } from "~/types/trolley"

defineProps<{ data: TrollyAllService["products"] }>()
</script>
