<template>
  <ElLoading v-if="pending" />
  <PageMarketErrorNotRegister v-else-if="error?.message" />
  <ErrorNotFound
    v-else-if="data?.orders.length === 0"
    :title="'Data Confirm is Empty maybe you not have order from user '"
    :code="404"
    :linkTitle="'Register'"
    link="/market/profile"
  />
  <ElError v-else-if="error || !data" />
  <PageOrderUser v-else :data="data.orders" />
</template>

<script lang="ts" setup>
definePageMeta({
  // middleware: ["user"],
  layout: "user",
})

const { data, pending, error } = await useOrderUser().findAll()
</script>
