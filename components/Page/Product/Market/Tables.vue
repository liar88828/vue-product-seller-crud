<template>
  <Table>
    <thead>
      <tr>
        <!-- <th>
        <input type="checkbox" class="checkbox" />
      </th> -->
        <th>Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <ElEmptyNewTable v-if="data.length === 0" />
      <tr v-else v-for="item in data" :key="item.id">
        <!-- <th>
        <input type="checkbox" class="checkbox" />
      </th> -->
        <td>
          <div class="flex items-center gap-3 static">
            <div class="avatar static">
              <div class="mask mask-squircle w-12 h-12 static">
                <img :src="item.image ?? ''" :alt="item.name ?? ''" />
              </div>
            </div>
            <div>
              <div class="font-bold">{{ item.name }}</div>
              <div class="text-sm opacity-50">{{ item.brand }}</div>
            </div>
          </div>
        </td>
        <td>
          {{ formatRupiah(item.price) }}
        </td>
        <td>
          {{ formatNumber(item.stock) }}
        </td>
        <th>
          <NuxtLink
            class="btn sm:btn-outline btn-sm btn-square"
            :to="`/market/product/${item.id}`"
          >
            <IconsDetail class="h-5 w-5" />
            <!-- <span class="hidden sm:block">Detail</span> -->
          </NuxtLink>
        </th>
      </tr>
    </tbody>
  </Table>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"

const { formatRupiah, formatNumber } = useFormat()
defineProps<{
  data: Product[]
}>()
</script>
