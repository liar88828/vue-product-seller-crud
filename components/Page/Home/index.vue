<template>
  <section class="space-y-5">
    <PageSellProfileGrid />

    <CardParentFlex
      :flex="true"
      :class="'bg-base-200'"
      :title="'Categories'"
      :class2="'text-sm sm:text-md md:text-lg '"
      :right="Counts"
    >
      <CardCategory
        v-for="dataIcon in dataCategory"
        :key="dataIcon.title"
        :data="dataIcon"
      />
    </CardParentFlex>

    <CardParentFlex
      :class2="'text-sm sm:text-md md:text-lg '"
      :class="'bg-info/10'"
      :title="'New Products'"
      :right="More"
      other="/shop?category=new-products"
    >
      <CardProductFlex
        v-for="dataRelated in dataProducts"
        :key="dataRelated.id"
        :data="dataRelated"
        :full="true"
        :full2="false"
      />
    </CardParentFlex>

    <!--  -->
    <PageSellProfileAdv :data="dataAdv" />
    <!--  -->

    <CardParentFlex
      class="bg-primary/10"
      title="Trending Products"
      :class2="'text-sm sm:text-md md:text-lg '"
      :right="More"
      other="/shop?category=trading-products"
    >
      <CardProductFlex
        v-for="dataRelated in dataProducts"
        :key="dataRelated.id"
        :data="dataRelated"
        :full="true"
        :full2="false"
      />
    </CardParentFlex>

    <!--  -->
    <PageSellProfileAdv :data="dataAdv2" />
    <!--  -->

    <CardParentFlex
      class="bg-accent/10"
      title="Best Sellers"
      :class2="'text-sm sm:text-md md:text-lg '"
      :right="More"
      other="/shop?category=best-seller"
    >
      <CardProductFlex
        v-for="dataRelated in dataProducts"
        :key="dataRelated.id"
        :data="dataRelated"
        :full="true"
        :full2="false"
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
import More from "~/components/Card/Other/More.vue"
defineProps<{
  dataCategory: ItemIcons[]
  dataProducts: Product[]
  dataAdv: AdvProps
  dataAdv2: AdvProps
}>()
</script>
