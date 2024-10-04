<template>
  <ElLoadingBounce v-if="pending" />
  <ElError v-else-if="!data" />
  <PageHistoryMarketDetail
    v-else="!data"
    :data="data.history"
    @confirm-transaction="() => onConfirm(id)"
    @reject-transaction="() => onReject(id)"
  />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
  layout: "market",
})
const { id } = useRoute().params
const { onConfirm, onReject } = useOrderMarket()
const { data, pending } = await useHistoryMarket().findId(id)
</script>
