<template>
  <NuxtLayout name="user">
    <ElLoading v-if="pending"/>
    <ElError v-else-if="error || !data"/>
    <!-- @vue-expect-error -->
    <PageTransactionOrder :data="data.order"/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { id } = useRoute().params
const { data, pending, error } = await useFetch(`/api/user/order/${ id }`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
