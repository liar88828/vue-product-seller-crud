<template>
  <CardInit class='card-normal'>
    <CardHeadTitle
      title="Technical Specifications"
      :class="'text-xl sm:text-2xl font-bold'"

    >
      <p class="mt-2 md:text-xl">
        Discover the intricate details that make the Acme Chronograph a true
        masterpiece.
      </p>
    </CardHeadTitle>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="grid gap-2" v-for="item in data" :key="item.t">
        <h3 class="text-lg font-semibold">{{ item.t }}</h3>
        <p class="">{{ item.p }}</p>
      </div>
    </div>
  </CardInit>
</template>

<script lang="ts" setup>
import type { DataTechnicalSpc } from "~/types/product/item"

defineProps<{
  data: DataTechnicalSpc[]
}>()
</script>
