<template>
  <NuxtLayout name="market">
    <!--    <ElLoading v-if="pending"/>-->
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data" />
    <!-- @vue-expect-error -->
    <PageProfileMarket v-else :data="data.market" />
  </NuxtLayout>
</template>
<script lang="ts" setup>
// import { dataCompany } from "~/assets/example/user/dataCompany"
const { id } = useRoute().params
const { data, pending, error } = await useFetch(`/api/market/profile${id}}`, {
  method: "GET",
})
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
