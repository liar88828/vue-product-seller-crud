<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageProductEdit v-else :data="data.product" />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
  layout: "market",
})

const { id } = useRoute().params
const { data, error, pending } = await useProduct().marketId(id)
</script>
