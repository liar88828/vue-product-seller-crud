<template>
  <Suspense>
    <template #fallback>Loading.....</template>
    <template #default>
      <ElLoading v-if="pending" />
      <ElError v-else-if="error || !data" />
      <PageShopProductDetail v-else :data="data.product" />
    </template>
  </Suspense>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "shop",
})
const { id } = useRoute().params
const { data, error, pending } = await useProduct().shopId(id)
</script>
