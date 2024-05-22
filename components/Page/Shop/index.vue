<template>

  <section class="grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
    <div class="sm:col-span-1 md:col-span-2">
      <PageShopDropMenu />
    </div>
    <div class="sm:col-span-3 md:col-span-4 lg:col-span-6">
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"
      >
        <!-- <PageShopItemProduct :product="dataProduct" />
	        <PageShopItemProduct :product="dataProduct" />
	        <PageShopItemProduct :product="dataProduct" />
	        <PageShopItemProduct :product="dataProduct" />
	        <PageShopItemProduct :product="dataProduct" /> -->

        <ProductRelatedProduct :data="dataRelated" />
        <ProductRelatedProduct :data="dataRelated" />
        <ProductRelatedProduct :data="dataRelated" />
        <ProductRelatedProduct :data="dataRelated" />
        <ProductRelatedProduct :data="dataRelated" />
        <ProductRelatedProduct :data="dataRelated" />
        <ProductRelatedProduct :data="dataRelated" />
        <ProductRelatedProduct :data="dataRelated" />
        <ProductRelatedProduct :data="dataRelated" />
        <ProductRelatedProduct :data="dataRelated" />
        <ProductRelatedProduct :data="dataRelated" />
        <ProductRelatedProduct :data="dataRelated" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  dataRelated: { name: string; brand: string; price: number; img: string }
}>()
</script>
