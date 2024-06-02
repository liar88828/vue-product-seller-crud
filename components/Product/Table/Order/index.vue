<template>
  <CardInit :class="`   `">
    <ProductTableOrderOption :data="dataOrders" />
    <CardTable v-for="data in filterStatus" :key="data.id" :data="data">
      <ProductTableOrderBody :products="data.trolly" />
    </CardTable>
  </CardInit>
</template>

<script lang="ts" setup>
import type { OrderProps } from "~/types/product/order"

const props = defineProps<{
  dataOrders: OrderProps[]
}>()
const { filter } = useOrder()
const filterStatus = computed(() => filter(props.dataOrders))
</script>
