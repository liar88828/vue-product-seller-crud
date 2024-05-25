<template>
  <div class="overflow-x-auto">
    <table>
      <!-- head -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Qty</th>
          <th>Total</th>
          <th>Status</th>
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
          <td>
            <span :class="getStatus('Delivered')"> Delivered </span>
          </td>
          <th>
            <NuxtLink
              class="btn btn-outline btn-xs"
              :to="`/product/detail/${data.id}`"
            >
              details</NuxtLink
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Product, User } from "@prisma/client"

defineProps<{
  products: Product[]
}>()
const { formatRupiah, formatNumber, totalNumber } = useFormat()
const { getStatus } = useStyle()
</script>
