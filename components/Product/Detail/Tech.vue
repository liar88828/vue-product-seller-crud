<template>
  <CardInit class="card-normal">
    <CardHeadTitle
      title="Technical Specifications"
      :class="'text-xl sm:text-2xl font-bold'"
    >
      <!-- <p class="mt-2 md:text-xl">
        {{ data.title }}
      </p> -->
    </CardHeadTitle>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="grid gap-2" v-for="item in data" :key="item.title">
        <h3 class="text-lg font-semibold">{{ item.title }}</h3>
        <p class="">{{ item.text }}</p>
      </div>
    </div>
  </CardInit>
</template>

<script lang="ts" setup>
import type { DataTechnicalSpec } from "~/types/product/item"

defineProps<{
  data: DataTechnicalSpec[]
}>()
</script>
