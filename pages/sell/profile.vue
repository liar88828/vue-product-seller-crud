<template>
  <PageSellProfile
    :data-category="dataCategory"
    :data-relateds="dataProducts"
    :data-adv="dataAdv"
    :data-adv2="dataAdv2"
  />
</template>
<script lang="ts" setup>
import { dataAdv, dataAdv2 } from "~/assets/example/dataAdv"
import { dataProducts } from "~/assets/example/dataProduct"
import { dataCategory } from "~/assets/link/shopLink"
</script>
