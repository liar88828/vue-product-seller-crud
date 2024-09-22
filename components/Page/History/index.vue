<template>
  <HistoryWrap :dataPurchase="dataPurchase">
    <HistoryBody :data="dataPurchase[0].Box" />
  </HistoryWrap>
</template>

<script lang="ts" setup>
import type { TransServer } from "~/types/market/order"
import HistoryWrap from "./HistoryWrap.vue"
import HistoryBody from "./HistoryBody.vue"
defineProps<{
  dataPurchase: TransServer[]
}>()
</script>
