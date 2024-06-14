<template>
  <NuxtLayout name="market">
    <div v-if="pending">Loading ...</div>

    <!-- @vue-expect-error -->
    <Error v-else-if="error || !data?.market" :error="error" />
    <!-- @vue-expect-error -->
    <PageProfileMarket
      v-show="!pending && !error && data?.market"
      :data="data.market"
    />
  </NuxtLayout>
</template>
<script lang="ts" setup>
// import { dataCompany } from "~/assets/example/user/dataCompany"
const { data, error, pending } = await useFetch("/api/market")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
