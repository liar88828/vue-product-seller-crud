<template>
  <div
    class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-5 sm:py-12 md:px-4"
  >
    <ProductDetailImageDetail />
    <ProductDetailDescription :data="dataDescription" />
  </div>
  <div class="space-y-5">
    <ProductDetailSpec :data="dataDescription" />
    <ProductDetailTech :data="dataTechnicalSpc" />

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
import type { MarketStatic } from "~/types/market/profile"
import type { DataPreviewProps } from "~/types/product/DataReview"
import type { DataTechnicalSpc, ProductItem } from "~/types/product/item"
defineProps<{
  static: MarketStatic
  dataDescription: ProductItem
  dataTechnicalSpc: DataTechnicalSpc[]
  dataPreviews: DataPreviewProps[]
  dataProducts: Product[]
}>()
</script>
