<template>
  <ElLoadingBounce v-if="pending" />
  <ElError v-else-if="!data" />
  <PageHistoryUserDetail
    v-else="!data"
    :data="data.history"
    @confirm-transaction="() => {}"
    @reject-transaction="() => {}"
  />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
  layout: "market",
})
const { id } = useRoute().params
const { onConfirm, onReject } = useOrderMarket()
const { data, pending } = await useHistoryUser().findId(id)
</script>
