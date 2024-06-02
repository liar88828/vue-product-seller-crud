<template>
  <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto md:px-4 mb-5">
    <ImageDetail :data="dataImage" />
    <Desc :data="dataProduct" />
  </div>
  <div class="space-y-5">
    <Spec :data="dataProduct.desc_spec" />
    <Tech :data="dataProduct.desc_tech" />
    <PageUserBox :data="dataPreviews" />
    <PageMarketBox :data="dataPreviews[0]" :static="static" />
    <PageProductGridDetail :title="'Related Products'" :data="dataProducts" />
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"
import type { DataImage } from "~/assets/example/product/image"
import type { MarketStatic } from "~/types/market/profile"
import type { DataPreviewProps } from "~/types/product/DataReview"
import type { ProductItem } from "~/types/product/item"
import ImageDetail from "./Images.vue"
import Desc from "./Desc.vue"
import Spec from "./Spec.vue"
import Tech from "./Tech.vue"
defineProps<{
  static: MarketStatic
  dataProduct: ProductItem
  dataPreviews: DataPreviewProps[]
  dataProducts: Product[]
  dataImage: DataImage[]
}>()
</script>
