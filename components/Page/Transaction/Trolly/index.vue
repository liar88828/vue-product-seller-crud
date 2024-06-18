<template>
  <CardParentSide :title="'Trolly'" :right="Trash">
    <PageProductModelSide
      v-for="dataProduct in data"
      :data="dataProduct"
      :key="dataProduct.id"
    />
    <Total :total-pay="99.98" :total-product="4" :total-send="5.99" />
    <PageProductModelSideTotal />
  </CardParentSide>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"
import Total from "./Total.vue"
import Trash from "~/components/Icons/Trash.vue"

defineProps<{ data: Product[] }>()
</script>
