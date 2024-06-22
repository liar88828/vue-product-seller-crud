<template>
  <NuxtLayout name="market">
    <!-- <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data" />
    <PageProfileMarket v-else :data="data?.market" /> -->
    {{ data?.market }}
  </NuxtLayout>
</template>
<script lang="ts" setup>
// import { dataCompany } from "~/assets/example/user/dataCompany"
const { data, error, pending } = await useFetch("/api/market/profile/", {
  // key: "market_id",
  onResponseError: async ({ error, response }) => {
    if (error || !response.ok) {
      console.log("error bos")
      console.log(response)
      throw createError({
        statusCode: 404,
        statusMessage:
          "Market is not found you must be create new market first",
      })
    }
  },
})
watch(data, () => {
  console.log(data.value)
})
if (!data.value?.market || error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Market is not found you must be create new market first",
  })
}
</script>
