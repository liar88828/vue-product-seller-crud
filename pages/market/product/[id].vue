<template>
  <!-- :dataImage="dataImage"  -->
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageProductEdit v-else :data="data.product" />
</template>

<script lang="ts" setup>
// import { dataProductDetails } from "~/assets/example/product/dataProduct"
// import { dataImage } from "~/assets/example/product/image"
const { id } = useRoute().params
const { data, error, pending } = await useFetch(`/api/product/${id}/detail`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
