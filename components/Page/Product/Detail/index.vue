<template>
  <div class="grid md:grid-cols-2 gap-8 mb-5">
    <ElError v-if="!data" />
    <Images v-else :data="data" />
    <Desc v-show="data" :data="data" />
  </div>
  <div class="space-y-5">
    <!-- <Spec v-show="data.detail.Spec" :data="data.detail.Spec" />
    <Tech v-show="data.detail.Tech" :data="data.detail.Tech" /> -->
    <ReviewUser />
    <ProductMarket :id_market="data.id_market" :id_product="data.id" />
    <RelatedProducts />
  </div>
</template>

<script setup lang="ts">
// import ImageDetail from "./Images.vue"
import Desc from "./Desc.vue"
import Images from "./Images.vue"
import Spec from "./Spec.vue"
import ReviewUser from "./ReviewUser.vue"
import Tech from "./Tech.vue"
import ProductMarket from "./ProductMarket.vue"
import RelatedProducts from "./RelatedProducts.vue"
import type { Product } from "@prisma/client"

defineProps<{ data: Product }>()
</script>
