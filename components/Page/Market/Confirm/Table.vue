<template>
<Tables >
<!-- :bg="'bg-base-300'" -->

  <thead>
    <tr>
      <!-- <th>
        <label>
          <input type="checkbox" class="checkbox checkbox-sm" />
        </label>
      </th> -->
      <th>Buyer</th>
      <th>Product Name</th>
      <th>Total</th>
    </tr>
  </thead>

  <tbody>
    <!-- row 1 -->
    <tr v-for="data in dataProduct" :key="data.id">
      <!-- <th>
        <label>
          <input type="checkbox" class="checkbox checkbox-sm" />
        </label>
      </th> -->
      <td>
        <div class="space-y-2">
          <div class="font-bold">{{ data.userBuy.name }}</div>
          <div class="text-sm opacity-50">
            {{ data.userBuy.address }}
          </div>
          <div>{{ getPhone(data.userBuy.phone ?? "") }}</div>
        </div>
      </td>
      <td>
        <div
          class="flex gap-2 space-y-2"
          v-for="trolly in data.trolly"
          :key="trolly.id"

        >
          <div class="flex items-center gap-3 ">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img
                  :src="trolly.image ?? ''"
                  :alt="trolly.name ?? ''"
                />
              </div>
            </div>
          </div>
          <div class="space-y-1">
            <div class="font-bold">{{ trolly.name }}</div>
            <div class="text-sm opacity-50">{{ trolly.brand }}</div>
            <div class="">{{ getRupiah(trolly.price) }}</div>
          </div>
        </div>
      </td>
      <td class='space-y-2'>
        <p>

          <!-- get total price and qty -->
          {{
          getRupiah(
            data.trolly
              .map((t) => t.price * t.stock)
              .reduce((a, b) => a + b, 0)
          )
        }}
              </p>
        
      <td>
        <NuxtLink
          class="btn btn-outline btn-xs"
          :to="`/market/confirm/${data.id}`"
        >
          details</NuxtLink
        >
      </td>
      </td>

    </tr>
  </tbody>

</Tables>  
</template>

<script lang="ts" setup>
import type { OrderProps } from '~/types/product/order'

defineProps<{
  dataProduct: OrderProps[]
}>()
</script>