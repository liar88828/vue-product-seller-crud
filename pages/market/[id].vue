<template>
  <NuxtLayout name="market">
    <!-- @vue-expect-error -->
    <PageProfileMarket :data="data" />
  </NuxtLayout>
</template>
<script lang="ts" setup>
// import { dataCompany } from "~/assets/example/user/dataCompany"
const { data } = await useFetch("/api/market/profile")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
