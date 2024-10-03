<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageShop v-else :data="data?.products" />
  <ElButtonScroll />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "shop",
})

const { data, pending, error } = await useProduct().shopAll()
</script>
