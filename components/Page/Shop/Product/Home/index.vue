<template>
  <section class="grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
    <div class="md:col-span-1 lg:col-span-1">
      <Filter />
    </div>
    <div class="md:col-span-3 lg:col-span-5 xl:col-span-6">
      <ElEmpty v-if="data?.length === 0" />
      <div
        v-else
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2"
      >
        <PageProductItem v-for="item in data" :data="item" :key="item.id" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"
import Filter from "./Filter.vue"

const props = defineProps<{
  data: Product[]
}>()
const { filter } = useShop()
const newData = filter(props.data)
</script>
