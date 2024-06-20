<template>
  <ElTables>
    <thead>
    <tr>
      <th>Buyer</th>
      <th>Product Name</th>
      <th>Total</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="item in data" :key="item.id">
      <td>
        <div class="space-y-2">
          <div class="font-bold">{{ item.userBuy.name }}</div>
          <div class="text-sm opacity-50">
            {{ item.userBuy.address }}
          </div>
          <div>{{ getPhone(item.userBuy.phone ?? "") }}</div>
        </div>
      </td>
      <td>
        <div
            class="flex gap-2 space-y-2"
            v-for="box in item.Box"
            :key="box.id"
        >
          <ElError v-if="!box.Product" text="error"/>
          <div
              v-else
              class="flex items-center gap-3 ">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img
                    :src="box.Product.image ?? ''"
                    :alt="box.Product.name ?? ''"
                />
              </div>
            </div>
          </div>
          <ElError v-if="!box.Product" text="error"/>
          <div v-else class="space-y-1">
            <div class="font-bold">{{ box.Product.name }}</div>
            <div class="text-sm opacity-50">{{ box.Product.brand }}</div>
            <div class="">{{ getRupiah(box.price) }}</div>
          </div>
        </div>
      </td>
      <td class='space-y-2'>
        <p>
          <!-- get total price and qty -->
          {{
            getRupiah(totalProduct)
          }}
        </p>
      </td>

      <td>
        <NuxtLink
            class="btn btn-outline btn-xs"
            :to="`/market/confirm/${item.id}`"
        >
          details
        </NuxtLink
        >
      </td>

    </tr>
    </tbody>

  </ElTables>
</template>

<script lang="ts" setup>
import type { DataMarket } from '~/types/market/order'


const props = defineProps<{
  data: DataMarket[]
}>()
const totalProduct = computed(() => props.data.flatMap((t) => t.Box).map((t) => t.price).reduce((a, b) => a + b, 0))
</script>