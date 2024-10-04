<template>
  <CardInit class="bg-base-100">
    <Option />
    <Tables :data="data" />
  </CardInit>
</template>

<script lang="ts" setup>
import Option from "./Option.vue"
import Tables from "./Tables.vue"
import type { Product } from "@prisma/client"
defineProps<{ data: Product[] }>()
</script>
