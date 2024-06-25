<template>
  <NuxtLayout name="shop">
    {{ status }}
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data" />
    <PageProductMarketShop
      v-else
      :data="{
        bestProduct: data?.bestProduct,
        discount: data?.discount,
        newProduct: data?.newProduct,
        // @ts-expect-error
        profile: data?.profile,
      }"
    />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// import { dataProductDetails } from "~/assets/example/product/dataProduct"
const { id } = useRoute().params
const { error, data, pending, status } = await useFetch(
  `/api/shop/market/${id}`
)
// watch(data, () => {
//   // console.log(data.value?.products)
// })
if (!data.value) {
  throw new Error("data not found")
}
</script>
