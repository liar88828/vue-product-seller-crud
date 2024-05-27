<template>
  <PageSellProfileGrid />
  <!-- <PageHomeCarousel /> -->

  <!-- <div class="card">
    <div class="card-body">
      <h1 class="card-title">Discount</h1>
      <PageHomeCounts />
    </div>
  </div> -->

  <ProductCardContainer
    class="bg-base-200"
    title="Categories Product"
    :right="Counts"
  >
    <ProductCardCategory
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
  <PageHomeFooter />
</template>

<script lang="ts" setup>
import { dataCategory } from "~/assets/link/shopLink"
import Counts from "./Counts.vue"
import { dataRelateds } from "~/assets/example/dataRelateds"
import { dataAdv, dataAdv2 } from "~/assets/example/dataAdv"
</script>
