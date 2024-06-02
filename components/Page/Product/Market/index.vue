<template>
  <CardInit class="bg-base-100">
    <Option />
    <Tables :dataProduct="newData" />
  </CardInit>
</template>

<script lang="ts" setup>
import type { ProductItem } from "~/types/product/item"
import Option from "./Option.vue"
import Tables from "./Tables.vue"
const props = defineProps<{ data: ProductItem[] }>()

const { filter } = useMarket()
const newData = computed(() => filter(props.data))
</script>
