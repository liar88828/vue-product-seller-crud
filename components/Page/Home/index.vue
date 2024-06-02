<template>
  <section class="space-y-5">
    <PageHomeDiscount />
    <PageProductCategoryFlex title="Find By Category" :data="dataCategory" />
    <PageProductFlex
      :data="dataProducts"
      title="New Products"
      link="/shop?category=new-products"
    />
    <PageHomeAdv :data="dataAdv" />
    <PageProductFlex
      :data="dataProducts"
      title="Trending Products"
      link="/shop?category=trading-products"
    />
    <PageHomeAdv :data="dataAdv2" />
    <PageProductFlex
      :data="dataProducts"
      title="Best Sellers"
      link="/shop?category=best-seller"
    />
    <PageHomeFooter />
  </section>
</template>

<script lang="ts" setup>
import type { ItemIcons } from "~/types/globals/icon"
import type { AdvProps } from "~/types/product/grid"
import type { Product } from "@prisma/client"
defineProps<{
  dataCategory: ItemIcons[]
  dataProducts: Product[]
  dataAdv: AdvProps
  dataAdv2: AdvProps
}>()
</script>
