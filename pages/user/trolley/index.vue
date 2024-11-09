<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageTrolley v-else :data="data?.trolleys" />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "user",
})

const { data, pending, error } = await useTrolley().findAll()
</script>
