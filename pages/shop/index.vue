<template>
  <!-- {{ search }} -->
  <!-- {{ store }} -->
  <PageShop :dataProducts="newData" />

  <ElButtonScroll />
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"
import { dataProducts } from "~/assets/example/product/dataProduct"
// const { search } = useSearch()
// console.log(search.value, "from shop")

const { data } = await useFetch("/api/product")

const { filter, store } = useShop()
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" })
}
const newData = filter(data.value?.products)
</script>
