<template>
  <!-- {{ search }} -->
  <!-- {{ store }} -->
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <!-- @vue-expect-error  -->
  <PageShop :data="data?.products" />

  <ElButtonScroll />
</template>

<script lang="ts" setup>
// import type { Product } from "@prisma/client"
// import { dataProducts } from "~/assets/example/product/dataProduct"
// const { search } = useSearch()
// console.log(search.value, "from shop")

const { data, pending, error } = await useFetch("/api/shop/product")

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" })
}
</script>
