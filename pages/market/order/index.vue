<template>
  <ElLoading v-if="pending" />
  <ErrorNotRegister v-else-if="error?.message" />
  <ErrorNotFound
    v-else-if="data?.orders.length === 0"
    :title="'Data Confirm is Empty maybe you not have order from user '"
    :code="404"
    :linkTitle="'Register'"
    link="/market/profile"
  />
  <ElError v-else-if="error || !data" />
  <PageOrderMarket v-else :data="data.orders" />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
  layout: "market",
})

const { data, pending, error } = await useOrderMarket().getData()
</script>
