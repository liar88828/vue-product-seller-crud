<template>
  <section class="space-y-5">
    <Discount />
    <PageProductCategoryFlex title="Find By Category" :data="dataCategory" />
    <NewProduct />
    <Adv :data="dataAdv" />
    <Trending />
    <Adv :data="dataAdv2" />
    <BestSeller />
    <PageHomeFooter />
  </section>
</template>

<script lang="ts" setup>
import Adv from "./Adv.vue"
import Discount from "./Discount.vue"
import Trending from "./Trending.vue"
import NewProduct from "./NewProduct.vue"
import BestSeller from "./BestSeller.vue"

// const props = defineProps<{ data: HomeProps }>()
</script>
