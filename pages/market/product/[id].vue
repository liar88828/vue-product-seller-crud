<template>
  <!-- :dataImage="dataImage"  -->
  <PageProductEdit :data="data?.product" />
</template>

<script lang="ts" setup>
// import { dataProductDetails } from "~/assets/example/product/dataProduct"
// import { dataImage } from "~/assets/example/product/image"
const { id } = useRoute().params
const { data } = await useFetch(`/api/product/${id}`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
