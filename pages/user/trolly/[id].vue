<template>
  <NuxtLayout name="profile">
    <PageTransactionTrolly :data="dataProducts" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataProducts } from "~/assets/example/product/dataProduct"
</script>
