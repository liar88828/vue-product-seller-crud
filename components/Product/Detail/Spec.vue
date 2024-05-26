<script setup lang="ts">
import type { ProductItem } from "~/types/product/item"

defineProps<{
  data: ProductItem
}>()
</script>

<template>
  <section class="py-5 sm:py-12 bg-base-100 shadow">
    <div class="max-w-6xl px-4 mx-auto">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">
        Product Specifications
      </h2>
      <div class="grid grid-cols-2 gap-5 md:gap-7 mt-4">
        <div v-for="item in data.spec_prod" :key="item.type">
          <h3 class="text-md sm:text-lg font-bold ">{{ item.type }}</h3>
          <ul>
            <li v-for="data in item.list">
              <span class="text-sm sm:text-md"> - {{ data }} </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
