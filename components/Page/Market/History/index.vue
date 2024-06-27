<template>
  <CardInit>
    <Option :data="data"/>
    <!-- @vue-skip -->
    <ElEmptyTable
        v-if="data.length === 0"
        :span="3"
        :text="'Not Have History'"
    />
    <CardTable
        v-for="item in data"
        v-else
        :data="data">
      <Tables
          :data="item.Box"
      />
    </CardTable>
  </CardInit>
</template>

<script lang="ts" setup>
import Option from "./Option.vue"
import Tables from "./Tables.vue"
import type { HistoryProps } from "~/types/market/order";

defineProps<{ data: HistoryProps[] }>()
</script>
