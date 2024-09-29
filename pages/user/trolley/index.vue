<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageTrolley v-else :data="data?.trolleys" />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "user",
})

const { data, pending, error } = await useFetch(`/api/user/trolley`, {
  key: "all_trolley",
})
// watch(data, () => {
//   console.log(data.value)
// })
// if (!data.value) {
//   throw new Error("data not found")
// }
</script>
