<script lang="ts" setup>
import type { ProductDetail } from "~/types/product/item"

defineProps<{ data: ProductDetail["detail"] }>()
</script>
<template>
  <CardInit class="card-normal bg-base-100/70" :bg="false">
    <CardHeadTitle
        :replace="true"
        :title="data.name"
        :class="'product-desc-h-p'"
    >
      <p class="product-desc-p-p leading-6">
        {{ data.description }}
      </p>
    </CardHeadTitle>

    <ul class="product-desc-li-p" v-for="item in data.Desc" :key="item.text">
      <li>{{ item.text }}</li>
    </ul>

 
  </CardInit>
</template>
