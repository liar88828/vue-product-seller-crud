<template>
  <CardInit>
    <Option :data="data" />
    <!-- @vue-skip -->
    <CardTable v-for="data in filterStatus" :key="data.id" :data="data">
      <Tables :products="data.trolly" />
    </CardTable>
  </CardInit>
</template>

<script lang="ts" setup>
//@ts-check
import type { DataMarket, TransProps } from "~/types/market/order"
import Option from "./Option.vue"
import Tables from "./Tables.vue"

const props = defineProps<{ data: TransProps[] }>()
const { filter } = useOrder()
const filterStatus = computed(() => filter(props.data))
</script>
