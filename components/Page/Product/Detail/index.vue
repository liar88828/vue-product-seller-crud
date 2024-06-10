<template>
  <div class="grid md:grid-cols-2 gap-8 mb-5">
    <ImageDetail :data="dataDetail.image" />
    <Desc :data="dataDetail" />
  </div>
  <div class="space-y-5">
    <Spec :data="dataDetail.desc_spec" />
    <Tech :data="dataDetail.desc_tech" />
    <PageUserBox :data="dataPreviews" />
    <PageMarketBox :data="dataPreviews[0]" :static="static" />
    <PageProductGridDetail :title="'Related Products'" :data="dataRelated" />
  </div>
</template>

<script setup lang="ts">
import ImageDetail from "./Images.vue"
import Desc from "./Desc.vue"
import Spec from "./Spec.vue"
import Tech from "./Tech.vue"
import type { ProductDetail } from "~/types/product/detail"

defineProps<ProductDetail>()
</script>
