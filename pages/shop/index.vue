<template>
  <!-- {{ search }} -->
  {{ store }}
  <PageShop :dataProducts="newData" />

  <ElButtonScroll />
</template>

<script lang="ts" setup>
import { dataProducts } from "~/assets/example/product/dataProduct"
// const { search } = useSearch()
// console.log(search.value, "from shop")

const { filter, store } = useShop()
const newData = filter(dataProducts)
</script>
