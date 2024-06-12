<script setup lang="ts">
import type { ProductDetail, ProductItem } from "~/types/product/item"

defineProps<{
  data: ProductDetail["detail"]["Spec"]
}>()
</script>

<template>
  <CardInit class="card-normal bg-base-200">
    <CardHeadTitle
      title=" Product Specifications"
      :class="'text-xl sm:text-2xl font-bold'"
    >
      <p class="product-desc-p">
        this product has good specification this is good
      </p>
    </CardHeadTitle>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7 mt-4"
    >
      <div v-for="item in data" :key="item.title">
        <h3 class="text-md sm:text-lg font-bold">{{ item.title }}</h3>
        <ul class="flex flex-wrap sm:flex-none gap-2 list-inside list-disc">
          <li
            v-for="list in item.list"
            :key="list.text"
            class="text-sm sm:text-md"
          >
            {{ list.text }}
          </li>
        </ul>
      </div>
    </div>
  </CardInit>
</template>
