<template>
  <div
    class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-5 sm:py-12 md:px-4"
  >
    <ProductEditImage :data="dataImage" />
    <ProductEditDesc :data="dataProduct" />
  </div>
  <div class="space-y-5">
    <ProductEditSpec :data="dataProduct.desc_spec" />
    <ProductEditTech :data="dataProduct.desc_tech" />
  </div>
  <NuxtLink to="/market/product" class="btn btn-info"> Back </NuxtLink>
</template>

<script setup lang="ts">
import type { DataImage } from "~/assets/example/product/image"
import type { ProductItem } from "~/types/product/item"

defineProps<{
  dataImage: DataImage[]
  dataProduct: ProductItem
}>()
</script>
