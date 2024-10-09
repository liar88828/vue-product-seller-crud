<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageProductDetail v-else :data="data.product" />
  <NuxtLink :to="`/market/product/${id}/edit`" class="btn btn-info w-full mt-5">
    Edit
  </NuxtLink>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
  layout: "market",
})
// import { dataProductDetails } from "~/assets/example/product/dataProduct"
// import { dataImage } from "~/assets/example/product/image"

const { id } = useRoute().params
const { marketId } = useProduct()
const { data, error, pending } = await marketId(id)
// watch(data, () => {
//   console.log(data.value)
// })
// if (!data.value) {
//   throw new Error("data not found")
// }
</script>
