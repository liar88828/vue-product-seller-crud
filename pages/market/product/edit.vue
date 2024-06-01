<template>
  <CardWrap title="Create Product">
    <p>create product page will be here</p>
    <form action="" class="space-y-2 w-full">
      <Input types="text" title="Name" v-model:input="state.name" />
      <Input types="text" title="Brand" v-model:input="state.brand" />
      <Input types="number" title="Price" v-model:input="state.price" />
      <Input types="text" title="Stock" v-model:input="state.stock" />
      <Textarea title="Stock" v-model:textarea="state.description" />
      <!-- <Input types="text" title="Name" v-model:state="state.name" />
      <Input types="text" title="Name" v-model:state="state.name" /> -->
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
  id: "",
  image: "",
  name: "",
  price: 0,
  stock: 0,
  typeId: "",
  userId: "",
})

async function onSubmit() {
  console.log(state)
}
</script>
