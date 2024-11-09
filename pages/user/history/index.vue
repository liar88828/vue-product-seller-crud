<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageHistoryUser v-else :data="data.histories" />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "user",
})
const { data, pending, error } = await useHistoryUser().findAll()
</script>
