<template>
<ElTables >
  <thead>
    <tr>
      <th>Buyer</th>
      <th>Product Name</th>
      <th>Total</th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="data in dataProduct" :key="data.id">
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
          v-for="trolly in data.Product"
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
          getRupiah( totalProduct )
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

</ElTables>  
</template>

<script lang="ts" setup>
import type { DataMarket } from '~/types/market/order'


const props=defineProps<{
  dataProduct: DataMarket[]
}>()
const totalProduct=computed(()=> props.dataProduct.flatMap((t)=>t.Product).map((t)=>t.price).reduce((a,b)=>a+b,0))
</script>