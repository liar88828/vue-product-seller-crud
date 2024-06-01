<script setup lang="ts">
import { dataProductDetail } from "~/assets/example/dataDescription"
import { dataPreviews } from "~/assets/example/dataPreview"
import { dataProducts } from "~/assets/example/dataProduct"
import { marketStatic } from "~/assets/example/dataCompany"
import { dataImage } from "~/assets/example/product/image"
</script>

<template>
  <ProductDetail
    :dataProduct="dataProductDetail"
    :static="marketStatic"
    :data-products="dataProducts"
    :data-previews="dataPreviews"
    :data-image="dataImage"
  />
</template>
