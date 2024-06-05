<template>
  <CardParentGrid
    :class="'card-normal bg-base-100/70'"
    :class2="'text-xl sm:text-2xl font-bold'"
    :title="'Related Products'"
    :bg="false"
  >
    <Grid
      v-for="dataProduct in data"
      :data="dataProduct"
      :key="dataProduct.id"
      :full="true"
      :full2="true"
    />
  </CardParentGrid>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"
import Grid from "../Model/Grid.vue"

defineProps<{
  data: Product[]
  title: string
}>()
</script>
