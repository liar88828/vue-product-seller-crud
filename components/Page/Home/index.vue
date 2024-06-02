<template>
  <section class="space-y-5">
    <PageHomeGrid />

    <CardParentFlex
      :bg="false"
      :flex="true"
      :class="'bg-base-100 '"
      :title="'Find By Category'"
      :class2="'text-sm sm:text-md md:text-lg '"
      :right="Counts"
    >
      <CardCategory
        class="my-2"
        v-for="dataIcon in dataCategory"
        :key="dataIcon.title"
        :data="dataIcon"
      />
    </CardParentFlex>

    <CardParentFlex
      :class2="'text-sm sm:text-md md:text-lg '"
      :title="'New Products'"
      :right="More"
      other="/shop?category=new-products"
      :class="'bg-base-100 '"
      :bg="false"
    >
      <CardProductFlex
        class="my-2"
        v-for="dataRelated in dataProducts"
        :key="dataRelated.id"
        :data="dataRelated"
      />
    </CardParentFlex>

    <PageHomeAdv :data="dataAdv" />

    <CardParentFlex
      title="Trending Products"
      :class2="'text-sm sm:text-md md:text-lg '"
      :right="More"
      :class="'bg-base-100 '"
      other="/shop?category=trading-products"
      :bg="false"
    >
      <CardProductFlex
        class="my-2"
        v-for="dataRelated in dataProducts"
        :key="dataRelated.id"
        :data="dataRelated"
      />
    </CardParentFlex>

    <PageHomeAdv :data="dataAdv2" />

    <CardParentFlex
      :bg="false"
      :class="'bg-base-100 '"
      title="Best Sellers"
      :class2="'text-sm sm:text-md md:text-lg '"
      :right="More"
      other="/shop?category=best-seller"
    >
      <CardProductFlex
        class="my-2"
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
import More from "~/components/Card/Product/More.vue"
defineProps<{
  dataCategory: ItemIcons[]
  dataProducts: Product[]
  dataAdv: AdvProps
  dataAdv2: AdvProps
}>()
</script>
