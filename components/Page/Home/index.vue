<template>
  <section class="space-y-5">
    <PageSellProfileGrid />
    <!-- <PageHomeCarousel /> -->

    <!-- <div class="card">
    <div class="card-body">
      <h1 class="card-title">Discount</h1>
      <PageHomeCounts />
    </div>
  </div> -->

    <ProductParent
    :flex="true"
      class="bg-base-200"
      title="Categories Product"
      :right="Counts"
    >
      <ProductCardCategory
        v-for="dataIcon in dataCategory"
        :key="dataIcon.title"
        :data="dataIcon"
      />
    </ProductParent
    :flex="true">

    <ProductParent
    :flex="true" class="bg-info/10" title="New Products">
      <ProductCard
        v-for="dataRelated in dataProducts"
        :key="dataRelated.id"
        :data="dataRelated"
      />
    </ProductParent
    :flex="true">

    <!--  -->
    <PageSellProfileAdv :data="dataAdv" />
    <!--  -->

    <ProductParent
    :flex="true" class="bg-primary/10" title="Trending Products">
      <ProductCard
        v-for="dataRelated in dataProducts"
        :key="dataRelated.id"
        :data="dataRelated"
      />
    </ProductParent
    :flex="true">

    <!--  -->
    <PageSellProfileAdv :data="dataAdv2" />
    <!--  -->

    <ProductParent
    :flex="true" class="bg-accent/10" title="Best Sellers">
      <ProductCard
        v-for="dataRelated in dataProducts"
        :key="dataRelated.id"
        :data="dataRelated"
      />
    </ProductParent
    :flex="true">
    <PageHomeFooter />
  </section>
</template>

<script lang="ts" setup>
import Counts from "./Counts.vue"
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
