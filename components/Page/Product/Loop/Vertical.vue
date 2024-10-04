<template>
  <div>
    <PageProductTitle :title="title">
      <NuxtLink :href="link" class="btn btn-sm">See more</NuxtLink>
    </PageProductTitle>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2"
    >
      <PageProductLoopItem v-for="item in data" :data="item" :key="item.id" />
      <!-- :add-trolley="addTrolley" -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Product } from "@prisma/client"

defineProps<{
  data: Product[]
  link: string
  title: string
}>()
// const { addTrolley } = useTrolley()
</script>
