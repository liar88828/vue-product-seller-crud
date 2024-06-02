<template>
  <div
    class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-5 sm:py-12 md:px-4"
  >
    <Image :data="dataImage" />
    <Desc :data="dataProduct" />
  </div>
  <div class="space-y-5">
    <Spec :data="dataProduct.desc_spec" />
    <Tech :data="dataProduct.desc_tech" />
  </div>
  <NuxtLink to="/market/product" class="btn btn-info"> Back </NuxtLink>
</template>

<script setup lang="ts">
import type { DataImage } from "~/assets/example/product/image"
import type { ProductItem } from "~/types/product/item"
import Image from "./Image.vue"
import Desc from "./Desc.vue"
import Spec from "./Spec.vue"
import Tech from "./Tech.vue"

defineProps<{
  dataImage: DataImage[]
  dataProduct: ProductItem
}>()
</script>
