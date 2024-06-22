<template>
  <CardWrap title="Create Product">
    <p>create product page will be here</p>
    <form action="" class="space-y-2 w-full">
      <ElInput
        types="text"
        title="Name"
        v-model:input="state.data.name"
        :err="state.error.name"
      />
      <ElInput
        types="text"
        title="Brand"
        v-model:input="state.data.brand"
        :err="state.error.brand"
      />
      <ElInput
        types="number"
        title="Price"
        v-model:input="state.data.price"
        :err="state.error.price"
      />
      <ElInput
        types="text"
        title="Stock"
        v-model:input="state.data.stock"
        :err="state.error.stock"
      />
      <ElTextarea title="Stock" v-model:textarea="state.data.description" />
    </form>
    <button type="submit" @click="onSubmit" class="btn btn-info btn-outline">
      Submit
    </button>
    <NuxtLink to="/market/product" class="btn btn-outline"> Back </NuxtLink>
  </CardWrap>
</template>

<script lang="ts" setup>
const state = reactive<StoreBase<ProductMarketCreate>>({
  pending: false,
  error: {
    brand: [],
    description: [],
    image: [],
    name: [],
    price: [],
    stock: [],
    id_market: [],
    id_type: [],
    id_user: [],
  },
  data: {
    brand: "",
    description: "",
    image: "",
    name: "",
    price: 0,
    stock: 0,
    id_market: 0,
    id_type: "",
    id_user: "",
  },
})

async function onSubmit() {
  console.log(state)
  const body = zods.product.create.parse(state)
  const res = await useFetch("/api/market/product/", {
    method: "POST",
    body,
  })

  console.log(res)
}
</script>
