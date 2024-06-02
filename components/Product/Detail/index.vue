<template>
  <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto md:px-4 mb-5">
    <ProductDetailImageDetail :data="dataImage" />
    <ProductDetailDescription :data="dataProduct" />
  </div>
  <!-- mb-28 sm:mb-16 md:px-5 -->
  <div class="space-y-5">
    <ProductDetailSpec :data="dataProduct.desc_spec" />
    <ProductDetailTech :data="dataProduct.desc_tech" />

    <CardParent :title="'Customer Review'">
      <CardReview
        v-for="dataPreview in dataPreviews"
        :data="dataPreview"
        :key="dataPreview.name"
      />
    </CardParent>

    <CardParent :title="'Market'">
      <CardMarket>
        <CardMarketDesc :data="dataPreviews[0]" :static="static" />
      </CardMarket>
    </CardParent>

    <CardParentGrid :title="'Related Products'">
      <CardProductGrid
        v-for="dataProduct in dataProducts"
        :data="dataProduct"
        :key="dataProduct.id"
        :full="true"
        :full2="true"
      />
    </CardParentGrid>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"
import type { DataImage } from "~/assets/example/product/image"
import type { MarketStatic } from "~/types/market/profile"
import type { DataPreviewProps } from "~/types/product/DataReview"
import type { ProductItem } from "~/types/product/item"
defineProps<{
  static: MarketStatic
  dataProduct: ProductItem
  dataPreviews: DataPreviewProps[]
  dataProducts: Product[]
  dataImage: DataImage[]
}>()
</script>
