<template>
  <CardInit>
    <Option :data="data" />
    <CardTable v-for="data in filterStatus" :key="data.id" :data="data">
      <Tables :products="data.trolly" />
    </CardTable>
  </CardInit>
</template>

<script lang="ts" setup>
import type { OrderProps } from "~/types/market/order"
import Option from "./Option.vue"
import Tables from "./Tables.vue"

const props = defineProps<{ data: OrderProps[] }>()
const { filter } = useOrder()
const filterStatus = computed(() => filter(props.data))
</script>
