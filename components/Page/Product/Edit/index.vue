<template>
  <CardWrap title="Update Product">
    <p>Update product page will be here</p>
    <form action="" class="space-y-2 w-full">
      <ElInput types="text" title="Name" v-model:input="data.name" />
      <ElInput types="text" title="Brand" v-model:input="data.brand" />
      <ElInput types="number" title="Price" v-model:input="data.price" />
      <ElInput types="number" title="Stock" v-model:input="data.stock" />
      <ElInput types="type" title="Type" v-model:input="data.type" />
      <ElTextarea :title="'Description'" v-model:textarea="data.description">
      </ElTextarea>
    </form>

    <button @click="() => handleEdit(data)" class="btn btn-info btn-outline">
      Submit
    </button>

    <NuxtLink to="/market/product" class="btn btn-outline"> Back</NuxtLink>
  </CardWrap>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
  layout: "market",
})
const { data } = defineProps<{ data: ProductClient }>()

const handleEdit = async (product: ProductClient) => {
  await useProduct().onEdit(product, data.id)
}
</script>
