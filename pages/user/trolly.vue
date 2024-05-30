<template>
  <NuxtLayout name="profile">
    <ProductTrolly :data="dataProducts" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import {  dataProducts } from "~/assets/example/dataProduct"
</script>
