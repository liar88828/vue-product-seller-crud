<template>
  <NuxtLayout name="market">
    <ProfileMarket :data="dataCompany" />
  </NuxtLayout>
</template>
<script lang="ts" setup>
import { dataCompany } from "~/assets/example/user/dataCompany"
</script>
