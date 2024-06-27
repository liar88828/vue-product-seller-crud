<template>
  <NuxtLayout name="user">
    <!-- @vue-expect-error -->
    <PageTransactionOrder :data="data.order" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/user/history")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
