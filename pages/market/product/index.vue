<template>
  <ElLoading v-if="pending" />
  <ErrorNotRegister v-else-if="error?.message" />
  <ErrorNotFound
    v-else-if="data?.products.length === 0"
    :title="'Product is Empty'"
    :description="'Please product in shop '"
    :code="404"
    :linkTitle="'Create'"
    link="/market/product/create"
  />
  <ElError v-else-if="error || !data" />
  <PageProductMarket v-else :data="data.products" />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
  layout: "market",
})
const { error, data, pending } = await useProduct().marketAll()
</script>
