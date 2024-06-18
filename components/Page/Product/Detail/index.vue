<template>
  <div class="grid md:grid-cols-2 gap-8 mb-5">
    <!-- <ImageDetail v-show="data.detail.Img" :data="data.detail.Img" /> -->
    <Desc v-show="data.detail" :data="data.detail" />
  </div>
  <div class="space-y-5">
    <Spec v-show="data.detail.Spec" :data="data.detail.Spec" />
    <Tech v-show="data.detail.Tech" :data="data.detail.Tech" />
    <PageUserBox v-show="data.previews" :data="data.previews" />
    <PageMarketBox
      v-show="data.market"
      :data="data.market"
      :static="data.static"
    />
    <PageProductGridDetail
      v-show="data.relateds"
      :title="'Related Products'"
      :data="data.relateds"
    />
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
