<template>
  <NuxtLayout name="profile">
    <PageHistoryOrder :data-orders="dataOrders" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { dataOrders } from "~/assets/example/dataOrder"
</script>
