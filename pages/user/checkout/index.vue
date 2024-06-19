<template>
  <!-- i wrong is must be detail not many -->
  <PageTransactionTrolly :data="dataProducts" />
</template>

<script lang="ts" setup>
import { dataProducts } from "~/assets/example/product/dataProduct"
const { id } = useRoute().params
const { data } = await useFetch(`/api/product/${id}/checkout`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
