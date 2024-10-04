<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <!-- <PageMessageList v-else :="data?.count" :count="data?.count" /> -->
</template>
<script lang="ts" setup>
const { data, error, pending } = await useFetch(`/api/message/`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
