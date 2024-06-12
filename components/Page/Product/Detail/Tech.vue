<template>
  <CardInit class="card-normal bg-base-100/70">
    <CardHeadTitle
      title="Technical Specifications"
      :class="'text-xl sm:text-2xl font-bold'"
    />
    <div class="grid md:grid-cols-2 gap-6">
      <div class="grid gap-2" v-for="item in data" :key="item.title">
        <h3 class="text-lg font-semibold">{{ item.title }}</h3>
        <p class="">{{ item.text }}</p>
      </div>
    </div>
  </CardInit>
</template>

<script lang="ts" setup>
import type { DataTech, ProductDetail } from "~/types/product/item"

defineProps<{
  data: ProductDetail["detail"]["Tech"]
}>()
</script>
