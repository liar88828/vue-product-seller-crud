<template>
  <section class="space-y-5">
    <PageSellProfileGrid />

    <CardParentFlex
      :flex="true"
      :class="'bg-base-200'"
      :title="'Categories Product'"
      :right="Counts"
    >
      <CardCategory
        v-for="dataIcon in dataCategory"
        :key="dataIcon.title"
        :data="dataIcon"
      />
    </CardParentFlex>

    <CardParentFlex :class2="'text-xl'" class="bg-info/10" title="New Products">
      <ProductCard
        v-for="dataRelated in dataProducts"
        :key="dataRelated.id"
        :data="dataRelated"
        :full="true"
      />
    </CardParentFlex>

    <!--  -->
    <PageSellProfileAdv :data="dataAdv" />
    <!--  -->

    <CardParentFlex class="bg-primary/10" title="Trending Products">
      <ProductCard
        v-for="dataRelated in dataProducts"
        :key="dataRelated.id"
        :data="dataRelated"
      />
    </CardParentFlex>

    <!--  -->
    <PageSellProfileAdv :data="dataAdv2" />
    <!--  -->

    <CardParentFlex class="bg-accent/10" title="Best Sellers">
      <ProductCard
        v-for="dataRelated in dataProducts"
        :key="dataRelated.id"
        :data="dataRelated"
      />
    </CardParentFlex>

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
