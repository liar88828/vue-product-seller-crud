<template>
  <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-5 sm:py-12 md:px-4 ">
    <ProductDetailImageDetail />
    <ProductDetailDescription :data="dataDescription" />
  </div>
  <div class="space-y-5">
    <ProductDetailSpec :data="dataDescription" />
    <ProductDetailTech :data="dataTechnicalSpc" />

    <CardParent :title="'Customer Review'">
      <ProductDetailReview
        v-for="dataPreview in dataPreviews"
        :data="dataPreview"
        :key="dataPreview.name"
      />
    </CardParent>

    <CardParent :title="'Market'">
      <ProductDetailMarket :data="dataPreviews[0]" />
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
import type { DataPreviewProps } from "~/types/product/DataReview"
import type { DataTechnicalSpc, ProductItem } from "~/types/product/item"
defineProps<{
  dataDescription: ProductItem
  dataTechnicalSpc: DataTechnicalSpc[]
  dataPreviews: DataPreviewProps[]
  dataProducts: Product[]
}>()
</script>
