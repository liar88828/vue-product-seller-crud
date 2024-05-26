<template>
  <div class="overflow-x-auto">
    <table class="static">
      <!-- head -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Qty</th>
          <th>Total</th>
          <!-- <th>Status</th> -->
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="data in products" :key="data.id">
          <td class=" ">
            <div class="font-bold">{{ data.name }}</div>
            <div class="text-xs opacity-50">{{ data.brand }}</div>
          </td>
          <td>
            <div class="font-bold">{{ formatRupiah(data.price) }}</div>
            <div class="text-xs opacity-50">{{ data.stock }} pcs</div>
          </td>
          <td>
            {{ totalNumber(data.price, data.stock) }}
          </td>
          <!-- <td>
            <span :class="getStatus(status)"> {{ status }} </span>
          </td> -->
          <th>
            <NuxtLink
              class="btn btn-outline btn-sm btn-square sm:btn-block"
              :to="`/product/detail/${data.id}`"
            >
              <IconsDetail class="h-5 w-5" />
              <span class="hidden sm:block">Detail</span>
            </NuxtLink>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"

defineProps<{
  products: Product[]
}>()
const { formatRupiah, totalNumber } = useFormat()
</script>
