<template>
	<div class="max-w-6xl mx-auto py-12 px-4">
	    <h2 class="text-2xl font-bold mb-6">Related Products</h2>
	    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
	      <ProductRelatedProduct :data="dataRelated" />
	      <ProductRelatedProduct :data="dataRelated" />
	      <ProductRelatedProduct :data="dataRelated" />
	      <ProductRelatedProduct :data="dataRelated" />
	    </div>
	  </div>
</template>

<script setup lang="ts">
import type { Product } from '@prisma/client'

defineProps<{ 
	dataRelated: Product;
}>()
</script>
