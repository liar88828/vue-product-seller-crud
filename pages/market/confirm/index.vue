<template>
  <ElLoading v-if="pending" />
  <PageMarketErrorNotRegister v-else-if="error?.message.includes('market')" />
  <ErrorNotFound
    v-else-if="data?.confirms.length === 0"
    :title="'Data Confirm is Empty maybe you not have order from user '"
    :code="404"
    :linkText="'Register'"
    link="/market/profile"
  />
  <ElError v-else-if="error || !data" />
  <PageMarketConfirm v-else :data="data.confirms" />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
})
definePageMeta({
  layout: "market",
})

const { data, pending, error } = await useFetch("/api/transaction/confirm")
console.log(error?.value?.message)
// watch(data, () => {
//   console.log(data.value)
// })
// if (!data.value) {
//   throw new Error("data not found")
// }
</script>
