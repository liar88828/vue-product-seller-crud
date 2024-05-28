<template>
  <section class="space-y-5">
    <PageSellProfileGrid />

    <ProductCardContainer class="bg-base-200" title="Categories Product">
      <CardCategory
        v-for="dataIcon in dataCategory"
        :key="dataIcon.title"
        :data="dataIcon"
      />
    </ProductCardContainer>

    <ProductCardContainer class="bg-info/10" title="New Products">
      <ProductCard
        v-for="dataRelated in dataRelateds"
        :key="dataRelated.id"
        :data="dataRelated"
      />
    </ProductCardContainer>

    <!--  -->
    <PageSellProfileAdv :data="dataAdv" />
    <!--  -->

    <ProductCardContainer class="bg-primary/10" title="Trending Products">
      <ProductCard
        v-for="dataRelated in dataRelateds"
        :key="dataRelated.id"
        :data="dataRelated"
      />
    </ProductCardContainer>

    <!--  -->
    <PageSellProfileAdv :data="dataAdv2" />
    <!--  -->

    <ProductCardContainer class="bg-accent/10" title="Best Sellers">
      <ProductCard
        v-for="dataRelated in dataRelateds"
        :key="dataRelated.id"
        :data="dataRelated"
      />
    </ProductCardContainer>
  </section>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"
import type { ItemIcons } from "~/types/globals/icon"
defineProps<{
  dataAdv: any
  dataAdv2: any
  dataRelateds: Product[]
  dataCategory: ItemIcons[]
}>()
</script>
