<template>
  <CardInit>
    <Option :data="data" />
    <!-- @vue-skip -->
    <CardTable :data="data">
      <Tables :data="item" v-for="item in data" :key="item.id" />
    </CardTable>
  </CardInit>
</template>

<script lang="ts" setup>
import Option from "./Option.vue"
import Tables from "./Tables.vue"
import type { TransClient } from "~/types/market/order"

defineProps<{ data: TransClient[] }>()
</script>
