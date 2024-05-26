<script setup lang="ts">
import { dataDescription } from "~/assets/example/dataDescription"
import { dataPreviews } from "~/assets/example/dataPreview"
import { dataProducts, dataTechnicalSpc } from "~/assets/example/dataProduct"
</script>

<template>
  <ProductDetail
    :data-products="dataProducts"
    :data-description="dataDescription"
    :data-previews="dataPreviews"
    :data-technical-spc="dataTechnicalSpc"
  />
</template>
