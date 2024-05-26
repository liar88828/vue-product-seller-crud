<template>
  <NuxtLayout name="market">
    <PageMarketConfirm :data-purchases="dataPurchases" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataPurchases } from "~/assets/example/dataPurchase"
</script>
