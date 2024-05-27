<template>
  <!-- <PageSellProfileGrid />

  <Carousel />
  <div class="card">
    <div class="card-body">
      <h1 class="card-title">Discount</h1>
      <DiscountCount />
    </div>
  </div>

  <ProductCardContainer
    class="bg-base-200"
    title="Categories Product"
    >
    <ProductCardCategory
      v-for="dataIcon in dataCategory"
      :key="dataIcon.title"
      :data="dataIcon"
    />
  </ProductCardContainer>

  <Footer /> -->

  <PageHome />
</template>

<script lang="ts" setup>
import Footer from "../../components/Page/Home/Footer.vue"
// import DiscountCount from "./DiscountCount.vue"
import Carousel from "../../components/Page/Home/Carousel.vue"
import { dataCategory } from "~/assets/link/shopLink"

const Count = resolveComponent("DiscountCount")
</script>
