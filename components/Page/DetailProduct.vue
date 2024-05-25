<template>
  <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-5 sm:py-12">
    <ProductImageDetail />
    <ProductDescription :data="dataDescription" />
  </div>
  <ProductSpec :data="dataDescription" />
  <ProductTech />
  <ProductReview :dataPreview="dataPreview" />
  <ProductRelated :dataRelated="dataProduct" />
</template>

<script setup lang="ts">
import { dataDescription } from "~/assets/example/dataDescription"
import { dataPreview } from "~/assets/example/dataPreview"
import { dataProduct } from "~/assets/example/dataProduct"
</script>
