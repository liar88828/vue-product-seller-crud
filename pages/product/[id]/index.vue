<script setup lang="ts">
const { id } = useRoute().params
const { data, error, pending } = await useFetch(`/api/product/shop/${id}`)
</script>

<template>
  <Suspense>
    <template #fallback><ElLoading /></template>
    <template #default>
      <ElLoading v-if="pending" />
      <ElError v-else-if="error || !data" text="error" />
      <PageProductDetail v-else :data="data.product" />
    </template>
  </Suspense>
</template>
