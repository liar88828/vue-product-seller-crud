<script lang="ts" setup>
import type { ProductItem } from "~/types/product/item"

defineProps<{ data: ProductItem }>()
</script>
<template>
  <CardInit class="card-normal">
    <CardHeadTitle
      :replace="true"
      :title="data.name"
      :class="'product-desc-h-p'"
    >
      <p class="product-desc-p-p leading-6">
        {{ data.description }}
      </p>
    </CardHeadTitle>

    <ul class="product-desc-li-p" v-for="item in data.desc" :key="item">
      <li>{{ item }}</li>
    </ul>

    <div class="flex flex-col sm:flex-row gap-4 justify-end mt-5">
      <NuxtLink
        :to="'/product/checkout/' + data.id"
        class="btn btn-info font-bold md:btn-sm"
      >
        <IconsSell class="icons" />
        <span class="md:hidden lg:block"> Buy Now </span>
      </NuxtLink>
      <button class="btn btn-outline font-bold md:btn-sm">
        <IconsTrolley class="icons" />
        <span class="md:hidden lg:block"> Add to Cart </span>
      </button>
    </div>
  </CardInit>
</template>
