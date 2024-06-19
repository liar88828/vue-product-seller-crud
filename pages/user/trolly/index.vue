<template>
  <NuxtLayout name="profile">
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data" />
    <PageTransactionTrolly v-else :data="data?.trolly.products" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// import { dataProducts } from "~/assets/example/product/dataProduct"
import { dataProducts } from "~/assets/example/product/dataProduct"
const { id } = useRoute().params
const { data, pending, error } = await useFetch(`/api/user/trolly`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
