<template>
  <div class="overflow-x-auto">
    <table class="">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <input type="checkbox" class="checkbox" />
          </th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="data in dataProduct" :key="data.id">
          <th>
            <input type="checkbox" class="checkbox" />
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="data.image ?? ''" :alt="data.name ?? ''" />
                </div>
              </div>
              <div>
                <div class="font-bold">{{ data.name }}</div>
                <div class="text-sm opacity-50">{{ data.brand }}</div>
              </div>
            </div>
          </td>
          <td>
            {{ formatRupiah(data.price) }}
          </td>
          <td>
            {{ formatNumber(data.stock) }}
          </td>
          <th>
            <NuxtLink
              class="btn btn-outline btn-xs"
              :to="`/product/detail/${data.id}`"
            >
              <IconsDetail class="h-5 w-5" />
              <span class="hidden sm:block">Detail</span></NuxtLink
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import type { ProductItem } from "~/types/product/item"

const { formatRupiah, formatNumber } = useFormat()
defineProps<{
  dataProduct: ProductItem[]
}>()
</script>
