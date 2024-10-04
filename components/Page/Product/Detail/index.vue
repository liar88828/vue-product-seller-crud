<template>
  <div class="grid md:grid-cols-2 gap-8 mb-5">
    <Images v-show="data.Img" :data="data.Img" />
    <Desc v-show="data" :data="data" />
  </div>
  <div class="space-y-5">
    <Spec v-show="data.Spec" :data="data.Spec" />
    <Tech v-show="data.Tech" :data="data.Tech" />
  </div>
</template>

<script setup lang="ts">
import Desc from "./Desc.vue"
import Images from "./Images.vue"
import Spec from "./Spec.vue"
import Tech from "./Tech.vue"

defineProps<{ data: ProductItemServer }>()
</script>
