<script setup lang="ts">
import { dataPreviews } from "~/assets/example/product/dataPreview"
import {
  dataProductDetails,
  dataProducts,
} from "~/assets/example/product/dataProduct"
import { marketStatic } from "~/assets/example/user/dataCompany"
import { dataImage } from "~/assets/example/product/image"
</script>

<template>
  <PageProductDetail
    :dataProduct="dataProductDetails[0]"
    :static="marketStatic"
    :data-products="dataProducts"
    :data-previews="dataPreviews"
    :data-image="dataImage"
  />
</template>
