<template>
  <CardWrap title="Create Product">
    <p>create product page will be here</p>
    <form action="" class="space-y-2 w-full">
      <ElInput
          types="text"
          title="Name"
          v-model:input="store.data.name"
          :err="store.error.name"
      />
      <ElInput
          types="text"
          title="Brand"
          v-model:input="store.data.brand"
          :err="store.error.brand"
      />
      <ElInput
          types="number"
          title="Price"
          v-model:input="store.data.price"
          :err="store.error.price"
      />
      <ElInput
          types="number"
          title="Stock"
          v-model:input="store.data.stock"
          :err="store.error.stock"
      />
      <ElInput
          types="type"
          title="Type"
          v-model:input="store.data.id_type"
          :err="store.error.id_type"
      />

    </form>
    <p class="text-error text-lg text-center">
      {{ store.msg }}
    </p>

    <button
        @click="handleSubmit"
        class="btn btn-info btn-outline">
      Submit
    </button>


    <NuxtLink to="/market/product" class="btn btn-outline"> Back</NuxtLink>
  </CardWrap>
</template>

<script lang="ts" setup>
const { store, handleSubmit } = useProductCreate()

</script>
