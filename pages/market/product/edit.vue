<template>
  <CardWrap title="Create Product">
    <p>create product page will be here</p>
    <form action="" class="space-y-2 w-full">
      <ElInput types="text" title="Name" v-model:input="state.name" />
      <ElInput types="text" title="Brand" v-model:input="state.brand" />
      <ElInput types="number" title="Price" v-model:input="state.price" />
      <ElInput types="text" title="Stock" v-model:input="state.stock" />
      <ElTextarea title="Stock" v-model:textarea="state.description" />
    </form>
    <button type="submit" @click="onSubmit" class="btn btn-info btn-outline">
      Submit
    </button>
  </CardWrap>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"

const state = reactive<Product>({
  brand: "",
  description: "",
  id: 0,
  image: "",
  name: "",
  price: 0,
  stock: 0,
  id_company: 0,
  id_order: 0,
  id_type: "",
  id_user: "",
})

async function onSubmit() {
  console.log(state)
  const dataValid = zods.productCreate.parse(state)
  const res = await useFetch("/api/market/product/", {
    method: "PUT",
    body: dataValid,
  })
  console.log(res)
}
</script>
