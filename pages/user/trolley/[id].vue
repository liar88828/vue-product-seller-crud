<template>
  <PageTransactionTrolly :data="dataProducts" />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "user",
})
import { dataProducts } from "~/assets/example/product/dataProduct"
</script>
