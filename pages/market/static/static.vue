<template>
  <NuxtLayout name="market">
    <div>Static</div>
    <h1>Stock Brand Product</h1>
    <h1>Compare Sale Product</h1>
    <h1>Best Sell By Product</h1>
    <h1>Best Sell By Category</h1>
    <h1>Best Sell By Brand</h1>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/market/static")
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
