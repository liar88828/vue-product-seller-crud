<template>
  <ElLoading v-if="pending" />
  <ErrorNotFound
    v-else-if="data?.orders.length === 0"
    :title="'You not make order '"
    :code="404"
    :linkTitle="'shop'"
    link="/shop/product"
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
