<template>
  <!-- {{ search }} -->
  <!-- {{ store }} -->
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageShop v-else :data="data?.products" />
  <ElButtonScroll />
</template>

<script lang="ts" setup>
// import type { Product } from "@prisma/client"
// import { dataProducts } from "~/assets/example/product/dataProduct"
// const { search } = useSearch()
// console.log(search.value, "from shop")

const { data, pending, error } = await useFetch("/api/product/shop")

// if (!data.value) {
//   throw createError({ statusCode: 404, statusMessage: "Page Not Found" })
// }
</script>
