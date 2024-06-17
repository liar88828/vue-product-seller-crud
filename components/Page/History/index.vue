<template>
  <PageHistoryWrap :dataPurchase="dataPurchase">
    <PageHistoryBody :data="dataPurchase[0].Box" />
  </PageHistoryWrap>
</template>

<script lang="ts" setup>
import type { TransProps } from "~/types/market/order"

defineProps<{
  dataPurchase: TransProps[]
}>()
</script>
