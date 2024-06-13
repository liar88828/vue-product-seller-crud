<template>
  <section class="space-y-5">
    <PageHomeDiscount />
    <PageProductCategoryFlex title="Find By Category" :data="data.category" />
    <PageProductFlex
      v-if="data.newProducts"
      :data="data.newProducts"
      title="New Products"
      link="/shop?category=new-products"
    />
    <PageHomeAdv :data="data.adv" />
    <PageProductFlex
      v-if="data.trending"
      :data="data.trending"
      title="Trending Products"
      link="/shop?category=trading-products"
    />
    <PageHomeAdv :data="data.adv2" />
    <PageProductFlex
      v-if="data.bestSellers"
      :data="data.bestSellers"
      title="Best Sellers"
      link="/shop?category=best-seller"
    />
    <PageHomeFooter />
  </section>
</template>

<script lang="ts" setup>
import type { HomeProps } from "~/types/home/props"
const props = defineProps<{ data: HomeProps }>()
</script>
