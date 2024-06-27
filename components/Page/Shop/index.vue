<template>
  <!-- grid for filter and Product -->
  <section class="grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
    <div class="md:col-span-1 lg:col-span-1">
      <Filter />
    </div>
    <div class="md:col-span-3 lg:col-span-5 xl:col-span-6">
      <ElEmptyProduct v-if="data?.length === 0" />
      <PageProductGridShop v-else :data="newData" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"
import Filter from "./Filter.vue"

const props = defineProps<{
  data: Product[]
}>()
const { filter, store } = useShop()
const newData = filter(props.data)
</script>
