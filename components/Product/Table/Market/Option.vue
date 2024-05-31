<script setup lang="ts">
import { staticLink } from "~/assets/link/shopLink"

// const store = reactive({
//   search: "",
//   category: "",
//   stock: "",
//   price: "",
// })
// console.log(store.search)
// const store = inject(
//   "market_product",
//   reactive({
//     search: "",
//     category: "Category",
//     stock: "Stock",
//     price: "Price",
//   })
// )
const { store } = useMarket()
</script>



<template>
  <!-- {{ store }} -->
  <div class="flex justify-between flex-col">
    <div class="flex">
      <div class="input input-bordered flex items-center gap-2 input-sm w-full">
        <input
          v-model="store.search"
          type="text"
          class="grow"
          placeholder="Search"
        />
        <IconsSearch />
      </div>

      <button class="btn btn-info btn-sm">Search</button>
    </div>

    <div class="my-2">
      <div class="bg-base-100 flex justify-between">
        <!-- <EleSelect
          v-model:select="store.category"
          class="z-20"
          :data="staticLink.category"
        /> -->
        <EleSelect
          v-model:select="store.stock"
          class="z-20"
          :data="staticLink.stock"
        />
        <EleSelect
          v-model:select="store.price"
          class="z-20"
          :data="staticLink.price"
        />
      </div>
    </div>
  </div>
</template>
