<template>
  <NuxtLayout name="profile">
    <ProductTrolly :data="dataProductDetails" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataProductDetails } from "~/assets/example/dataProduct"
</script>
