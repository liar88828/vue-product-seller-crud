<template>
  <ElLoading v-if="pending" />
  <PageMarketErrorNotRegister v-else-if="error?.message" />
  <ErrorNotFound
    v-else-if="data?.confirms.length === 0"
    :title="'Data Confirm is Empty maybe you not have order from user '"
    :code="404"
    :linkTitle="'Register'"
    link="/market/profile"
  />
  <ElError v-else-if="error || !data" />
  <PageTransactionMarket v-else :data="data.confirms" />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
  layout: "market",
})

const { data, pending, error } = await useOrderMarket().getData()
</script>
