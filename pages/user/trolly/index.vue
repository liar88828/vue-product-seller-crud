<template>
  <NuxtLayout name="user">
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data" />
    <PageTransactionTrollyNew v-else :data="data?.trolleys" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { data, pending, error } = await useFetch(`/api/user/trolley`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
