<template>
  <div class="grid md:grid-cols-2 gap-8 mb-5">
    <ElError v-if="!data.detail" />
    <Images v-else :data="data.detail" />

    <Desc v-show="data.detail" :data="data.detail">
      <div class="flex flex-col sm:flex-row gap-4 justify-end mt-5">
        <NuxtLink
          :to="`/product/checkout/${id}`"
          class="btn btn-info font-bold md:btn-sm"
        >
          <IconsSell class="icons" />
          <ElLoading v-if="store.pending" />
          <span v-else class="md:hidden lg:block"> Buy Now </span>
        </NuxtLink>

        <button
          @click="handlerAddTrolly"
          :class="[
            'btn btn-outline font-bold md:btn-sm',
            store.pending && 'btn-disabled',
          ]"
        >
          <IconsTrolley class="icons" />
          <ElLoading v-if="store.pending" />
          <span v-else class="md:hidden lg:block"> Add to Cart </span>
        </button>
      </div>
    </Desc>
  </div>
  <div class="space-y-5">
    <Spec v-show="data.detail.Spec" :data="data.detail.Spec" />
    <Tech v-show="data.detail.Tech" :data="data.detail.Tech" />
    <PageUserBox />
    <ProductMarket />
    <RelatedProducts />
  </div>
</template>

<script setup lang="ts">
// import ImageDetail from "./Images.vue"
import Desc from "./Desc.vue"
import Images from "./Images.vue"
import Spec from "./Spec.vue"
import Tech from "./Tech.vue"
import ProductMarket from "./ProductMarket.vue"
import RelatedProducts from "./RelatedProducts.vue"
import type { ProductDetailClient } from "~/types/product/item"

const props = defineProps<{ data: ProductDetailClient }>()

const { id } = useRoute().params
const { session } = useUserSession()

const store = reactive({
  pending: false,
})

const refreshTrollyNotify = () => refreshNuxtData("trolley_notify")
const handlerAddTrolly = async () => {
  const sendData: TrolleyCreate = {
    id_product: Number(id),
    // id_trolley: id_trolley,
    // price: props.data.detail.price,
    qty: 1,
    id_user: session?.value.session.id,
    id: 0,
  }

  store.pending = true
  const { data, pending } = await useFetch(`/api/user/trolly/${id}`, {
    method: "POST",
    body: sendData,
  })
  console.log(data)
  store.pending = pending.value
  refreshTrollyNotify()
}
</script>
