<template>
  <CardInit :class="`   `">
    <Option :data="dataOrders" />
    <CardTable v-for="data in filterStatus" :key="data.id" :data="data">
      <Tables :products="data.trolly" />
    </CardTable>
  </CardInit>
</template>

<script lang="ts" setup>
import type { OrderProps } from "~/types/product/order"
import Option from "./Option.vue"
import Tables from "./Tables.vue"

const props = defineProps<{
  dataOrders: OrderProps[]
}>()
const { filter } = useOrder()
const filterStatus = computed(() => filter(props.dataOrders))
</script>
