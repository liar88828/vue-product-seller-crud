<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageMessageList v-else :data="data.list" />
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "message",
})
// import { countUnRead, dataNotifies } from "~/assets/example/message/dataMessage"
const { data, pending, error } = await useMessage().findAll()
</script>
