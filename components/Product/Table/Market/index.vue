<template>
  <CardInit class="bg-base-100">
    <ProductTableMarketOption />
    <ProductTableMarketTables :dataProduct="newData" />
  </CardInit>
</template>

<script lang="ts" setup>
import type { ProductItem } from "~/types/product/item"
const props = defineProps<{
  data: ProductItem[]
}>()
const stores = reactive({
  search: "",
  category: "Category",
  stock: "Stock",
  price: "Price",
})
provide<{
  search: string
  category: string
  stock: string
  price: string
}>("market_product", stores)

const newData = computed(() => {
  const search = props.data.filter((data) => {
    return data.name.toLowerCase().includes(stores.search.toLowerCase())
  })
  // stock High and Low
  const stock = search.sort((a, b) => {
    if (stores.stock !== "Stock") {
      if (stores.stock === "Low") return a.stock - b.stock
      if (stores.stock === "High") return b.stock - a.stock
    }
    return 0
  })

  const price = stock.sort((a, b) => {
    if (stores.price !== "Price") {
      if (stores.price === "Low") return a.price - b.price
      if (stores.price === "High") return b.price - a.price
    }
    return 0
  })
  return price
})
</script>
<!-- // find category
if (stores.category !== "Category") {
  search = search && data.typeId === stores.category
}
// find stock less than 10
if (stores.stock !== "Stock") {
  if (stores.stock === "Low") {
    search = search && data.stock < 10
  }
  if (stores.stock === "High") {
    search = search && data.stock > 10
  }

  // search = search && data.stock <= Number(stores.stock)
}
// sort by price low and high
// price high will sort by price desc
// the value of high is greater than the value of low

// if (stores.price !== "Price") {
//   search = search && data.price <= Number(stores.price)
// }

// if (stores.stock !== "Stock") {
//   search = search && data.stock === Number(stores.stock)
// }
// if (stores.price !== "Price") {
//   search = search && data.price < Number(stores.price)
// } -->
