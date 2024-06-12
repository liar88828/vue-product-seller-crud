<template>
  <NuxtLayout name="market">
    <!-- @vue-expect-error -->
    <PageProductMarket :data="data" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// import { dataProductDetails } from "~/assets/example/product/dataProduct"
const { data } = await useFetch("/api/market/product/")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
