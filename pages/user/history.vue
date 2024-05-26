<template>
  <NuxtLayout name="profile">
    <ProductTableOrder :data-orders="dataHistoris" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataHistoris } from "~/assets/example/dataHistory"
</script>
