<template>
  <NuxtLayout name="market">
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data?.confirms" />
    <PageMarketConfirm v-else :data="data.confirms" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { data, pending, error } = await useFetch("/api/transaction/confirm", {})
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
