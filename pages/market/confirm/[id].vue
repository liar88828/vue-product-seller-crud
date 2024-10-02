<template>
  <ElLoadingBounce v-if="pending" />
  <ElError v-else-if="!data" />
  <PageTransactionMarketDetail
    v-else="!data"
    :data="data.confirm"
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
const { getDataId, onConfirm, onReject } = useConfirm()
const { data, pending } = await getDataId(id)
</script>
