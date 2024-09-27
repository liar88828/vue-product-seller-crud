<template>
  <div class="grid md:grid-cols-2 gap-8 mb-5">
    <ElError v-if="!data" />
    <Images v-else :data="data" />

    <Desc v-show="data" :data="data">
      <div class="flex flex-col sm:flex-row gap-4 justify-end mt-5">
        <NuxtLink
          :to="`/product/checkout/${id}`"
          class="btn btn-info font-bold md:btn-sm"
        >
          <IconsSell class="icons" />
          <ElLoading v-if="isPending" />
          <span v-else class="md:hidden lg:block"> Buy Now </span>
        </NuxtLink>

        <button
          @click="() => onPush(data.id)"
          :class="[
            'btn btn-outline font-bold md:btn-sm',
            isPending && 'btn-disabled',
          ]"
        >
          <IconsTrolley class="icons" />
          <ElLoading v-if="isPending" />
          <span v-else class="md:hidden lg:block"> Add to Cart </span>
        </button>
      </div>
    </Desc>
  </div>
  <div class="space-y-5">
    <!-- <Spec v-show="data.detail.Spec" :data="data.detail.Spec" />
    <Tech v-show="data.detail.Tech" :data="data.detail.Tech" /> -->
    <ReviewUser />
    <ProductMarket :id_market="data.id_market" :id_product="data.id" />
    <RelatedProducts />
  </div>
</template>

<script setup lang="ts">
// import ImageDetail from "./Images.vue"
import Desc from "./Desc.vue"
import Images from "./Images.vue"
import Spec from "./Spec.vue"
import ReviewUser from "./ReviewUser.vue"
import Tech from "./Tech.vue"
import ProductMarket from "./ProductMarket.vue"
import RelatedProducts from "./RelatedProducts.vue"
import type { ProductDetailClient } from "~/types/product/item"
import type { Product } from "@prisma/client"

defineProps<{ data: Product }>()
const { pushTrolley } = useTrolley()
const { id } = useRoute().params
const isPending = ref(false)

const onPush = async (id: number) => {
  isPending.value = false
  const { pending } = await pushTrolley(id)
  isPending.value = pending.value
}
</script>
