<template>
  <div>
    <Profile :data="data.profile" />
    <Products :data="data.discount" />
    <Products :data="data.newProduct" />
    <Products :data="data.bestProduct" />
  </div>
</template>

<script lang="ts" setup>
import Products from "./Products.vue"
import Profile from "./Profile.vue"
import type { ShopMarket } from "~/types/market/ProfileCompany"

defineProps<{ data: ShopMarket }>()
</script>
