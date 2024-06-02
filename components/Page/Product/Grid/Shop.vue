<template>
  <!--  -->
  <article class="grid1">
    <Grid
      v-for="product in data"
      :data="product"
      :full="true"
      :key="product.id"
      :static="true"
      :full2="true"
    />
  </article>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"
import Grid from "../Model/Grid.vue"

defineProps<{
  data: Product[]
}>()
</script>
