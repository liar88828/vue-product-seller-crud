<template>
  <NuxtLayout name="user">
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data?.products" />
    <PageTransactionLike v-else :data="data.products" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { data, pending, error } = await useFetch("/api/user/like/product")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
