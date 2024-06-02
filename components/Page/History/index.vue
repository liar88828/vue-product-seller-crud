<template>
  <PageHistoryWrap :dataPurchase="dataPurchase">
    <PageHistoryBody :data="dataPurchase[0].trolly" />
  </PageHistoryWrap>
</template>

<script lang="ts" setup>
import type { OrderProps } from "~/types/product/order"

defineProps<{
  dataPurchase: OrderProps[]
}>()
</script>
