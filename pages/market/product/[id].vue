<template>
  <PageProductEdit
    :dataImage="dataImage"
    :dataProduct="dataProductDetails[0]"
  />
</template>

<script lang="ts" setup>
import { dataProductDetails } from "~/assets/example/product/dataProduct"
import { dataImage } from "~/assets/example/product/image"
</script>
