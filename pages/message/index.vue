<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <!-- @vue-expect-error -->
  <PageChatList v-else :notify="data?.notify" :count="data?.count" />
</template>
<script lang="ts" setup>
// import { countUnRead, dataNotifies } from "~/assets/example/message/dataMessage"

const { data, error, pending } = await useFetch(`/api/message/`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
