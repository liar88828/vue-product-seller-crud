<script setup lang="ts">
import type { ProductItem } from "~/types/product/item"

defineProps<{
  data: ProductItem
}>()
</script>

<template>
  <CardInit class='card-normal'>
    <CardHeadTitle
      title=" Product Specifications"
      :class="'text-xl sm:text-2xl font-bold'"
    />
    <div class="grid grid-cols-2 gap-5 md:gap-7 mt-4">
      <div v-for="item in data.spec_prod" :key="item.type">
        <h3 class="text-md sm:text-lg font-bold">{{ item.type }}</h3>
        <ul>
          <li v-for="data in item.list">
            <span class="text-sm sm:text-md"> - {{ data }} </span>
          </li>
        </ul>
      </div>
    </div>
  </CardInit>
</template>
