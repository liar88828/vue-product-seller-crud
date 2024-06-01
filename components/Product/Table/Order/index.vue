<template>
  <CardInit :class="`   `">
    <ProductTableOrderOption :data="dataOrders" />
    <ProductTableParent
      v-for="data in filterStatus"
      :key="data.id"
      :data="data"
    >
      <ProductTableOrderBody :products="data.trolly" />
    </ProductTableParent>
  </CardInit>
</template>

<script lang="ts" setup>
import type { OrderProps } from "~/assets/example/dataOrder"

const props = defineProps<{
  dataOrders: OrderProps[]
}>()
const { filter } = useOrder()
const filterStatus = computed(() => filter(props.dataOrders))
</script>
