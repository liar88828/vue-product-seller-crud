<template>
  <div
    class="relative w-full overflow-x-hidden border rounded border-slate-600"
  >
    <table class="table table-zebra table-xs table-auto sm:table-sm">
      <thead>
        <tr>
          <th class="border border-slate-600">Nama</th>
          <th class="border border-slate-600">Brand</th>
          <th class="border border-slate-600">Qty</th>
          <th class="border border-slate-600">Price</th>
          <th class="border border-slate-600">Total</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in data.trolly">
          <td class="border border-slate-600">
            <div class="flex items-center gap-3">
              <IconsCardBoardClose />
              <div class="font-bold">{{ getTextSplit(item.name, 20) }}</div>
            </div>
          </td>
          <td class="border border-slate-600">
            {{ item.brand }}
          </td>
          <td class="border border-slate-600">{{ item.stock }}</td>
          <td class="border border-slate-600">
            {{ formatRupiah(item.price) }}
          </td>
          <td class="border border-slate-600">
            {{ totalNumber(item.price, item.stock) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { OrderProps } from "~/types/market/order"

defineProps<{
  data: OrderProps
}>()
const { formatRupiah, totalNumber } = useFormat()
</script>
