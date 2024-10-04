<template>
  <div
    class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-5 sm:py-12 md:px-4"
  >
    <!--    <Image :data="data.dataImage" />-->
  </div>
  <div class="md:space-y-5 space-y-2">
    <!-- <Desc :data="data" />
    <Spec :data="data.Spec" :id="data.id" />
    <Tech :data="data.Tech" :id="data.id" /> -->
  </div>
  <NuxtLink to="/market/product" class="btn btn-info"> Back </NuxtLink>
</template>

<script setup lang="ts">
import Desc from "./Desc.vue"
import Spec from "./Spec.vue"
import Tech from "./Tech.vue"

defineProps<{
  data: ProductClient
}>()
</script>
