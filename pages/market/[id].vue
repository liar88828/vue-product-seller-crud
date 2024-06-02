<template>
  <NuxtLayout name="market">
    <PageProfileMarket :data="dataCompany" />
  </NuxtLayout>
</template>
<script lang="ts" setup>
import { dataCompany } from "~/assets/example/user/dataCompany"
</script>
