<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <!-- @vue-expect-error -->
  <PageProfileEditMarket v-else :data="data?.market" />
</template>

<script lang="ts" setup>
// import { dataCompany } from "~/assets/example/user/dataCompany"
const { data, error, pending } = await useFetch("/api/market/profile/old")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
