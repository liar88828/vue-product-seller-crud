<template>
  <div class="grid md:grid-cols-2 gap-8 mb-5">
    <ImageDetail :data="data.detail.Img" />
    <Desc :data="data.detail" />
  </div>
  <div class="space-y-5">
    <Spec :data="data.detail.Spec" />
    <Tech :data="data.detail.Tech" />
    <PageUserBox :data="data.previews" />
    <PageMarketBox :data="data.market" :static="data.static" />
    <PageProductGridDetail :title="'Related Products'" :data="data.related" />
  </div>
</template>

<script setup lang="ts">
import ImageDetail from "./Images.vue"
import Desc from "./Desc.vue"
import Spec from "./Spec.vue"
import Tech from "./Tech.vue"
import type { ProductDetail } from "~/types/product/item"

defineProps<{ data: ProductDetail }>()
</script>
