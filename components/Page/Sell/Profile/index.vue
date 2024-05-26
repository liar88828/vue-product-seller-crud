<template>
  <section class="space-y-5">
    <PageSellProfileGrid />

    <ProductCardContainer class="" title="Categories Product">
      <ProductCategory
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
import { dataAdv, dataAdv2 } from "~/assets/example/dataAdv"
import { dataRelateds } from "~/assets/example/dataRelateds"
import { dataCategory } from "~/assets/link/shopLink"
</script>
