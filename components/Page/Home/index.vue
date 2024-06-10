<template>
  <section class="space-y-5">
    <LazyPageHomeDiscount />
    <LazyPageProductCategoryFlex
      title="Find By Category"
      :data="dataCategory"
    />
    <LazyPageProductFlex
      :data="dataNewProducts"
      title="New Products"
      link="/shop?category=new-products"
    />
    <LazyPageHomeAdv :data="dataAdv" />
    <LazyPageProductFlex
      :data="dataTrending"
      title="Trending Products"
      link="/shop?category=trading-products"
    />
    <LazyPageHomeAdv :data="dataAdv2" />
    <LazyPageProductFlex
      :data="dataBestSellers"
      title="Best Sellers"
      link="/shop?category=best-seller"
    />
    <LazyPageHomeFooter />
  </section>
</template>

<script lang="ts" setup>
import type { ItemIcons } from "~/types/globals/icon"
import type { AdvProps } from "~/types/product/grid"
import type { Product } from "@prisma/client"
defineProps<{
  dataCategory: ItemIcons[]
  dataAdv: AdvProps
  dataAdv2: AdvProps
  dataBestSellers: Product[]
  dataTrending: Product[]
  dataNewProducts: Product[]
}>()
</script>
