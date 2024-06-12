<template>
  <PageHistoryWrap :dataPurchase="dataPurchase">
    <PageHistoryBody :data="dataPurchase[0].trolly" />
  </PageHistoryWrap>
</template>

<script lang="ts" setup>
import type { OrderProps } from "~/types/market/order"

defineProps<{
  dataPurchase: OrderProps[]
}>()
</script>
