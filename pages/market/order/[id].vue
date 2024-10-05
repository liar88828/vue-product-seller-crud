<template>
  <ElLoadingBounce v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageOrderMarketDetail
    v-else
    :data="data.order"
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
const { getDataId, onConfirm, onReject } = useOrderMarket()
const { data, pending, error } = await getDataId(id)
</script>
