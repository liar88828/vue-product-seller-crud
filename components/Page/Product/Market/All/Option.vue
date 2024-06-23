<script setup lang="ts">
import { staticLink } from "assets/link/shopLink"

const { store } = useMarket()
</script>
<template>
  <div class="flex justify-between flex-col">
    <div class="flex gap-2">
      <div class="join w-full">
        <div
          class="join-item input input-bordered flex items-center gap-2 input-sm w-full"
        >
          <input
            v-model="store.search"
            type="text"
            class="grow"
            placeholder="Search"
          />
          <IconsSearch />
        </div>

        <button class="join-item btn btn-sm">Search</button>
      </div>
      <NuxtLink
        to="/market/product/create/"
        class="btn btn-info btn-outline btn-sm btn-square"
      >
        <IconsPlus />
      </NuxtLink>
    </div>

    <div class="my-2">
      <div class="bg-base-100 flex justify-end gap-2">
        <!-- <ElSelect
          v-model:select="store.category"
          class="z-20"
          :data="staticLink.category"
        /> -->

        <ElSelect
          v-model:select="store.stock"
          class="z-20"
          :data="staticLink.stock"
        />
        <ElSelect
          v-model:select="store.price"
          class="z-20"
          :data="staticLink.price"
        />
      </div>
    </div>
  </div>
</template>
