<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageProductMarketEdit v-else :data="data?.product" />
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"

const { id } = useRoute().params
const { data, error, pending } = await useFetch(`/api/product/market/${id}`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}

const state = reactive<Product>({
  brand: "",
  description: "",
  id: 0,
  image: "",
  name: "",
  price: 0,
  stock: 0,
  id_market: 0,
  id_user: "",
  id_type: "",
})

async function onSubmit() {
  console.log(state)
  const dataValid = zods.product.create.parse(state)
  const res = await useFetch(`/api/market/product/${id}`, {
    method: "PUT",
    body: dataValid,
  })
  console.log(res)
}
</script>
