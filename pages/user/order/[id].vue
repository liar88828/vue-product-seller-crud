<template>
  <ElLoadingBounce v-if="pending" />
  <ElError v-else-if="!data" />
  <PageTransactionMarketDetail
    v-else="!data"
    :data="data.order"
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
const { data, pending } = await useOrderUser().findId(id)
</script>
