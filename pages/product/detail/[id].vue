<script setup lang="ts">
import { dataDescription } from "~/assets/example/dataDescription"
import { dataPreviews } from "~/assets/example/dataPreview"
import {
  dataProductDetails,
  dataProducts,
  dataTechnicalSpc,
} from "~/assets/example/dataProduct"

import { marketStatic } from "~/assets/example/dataCompany"
</script>

<template>
  <ProductDetail
    :static="marketStatic"
    :data-products="dataProducts"
    :data-description="dataDescription"
    :data-previews="dataPreviews"
    :data-technical-spc="dataTechnicalSpc"
  />
</template>
