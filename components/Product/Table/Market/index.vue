<template>
  <LayCardWrap class="bg-base-100">
    <ProductTableMarketOption />
    <ProductTableMarketBody :data-product="dataProducts" />
  </LayCardWrap>
</template>

<script lang="ts" setup>
import { dataProducts } from "~/assets/example/dataProduct"
</script>
