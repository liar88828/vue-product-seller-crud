<template>
  <table>
    <thead>
      <tr>
        <th class="border border-slate-600">Name</th>
        <th class="border border-slate-600">Price</th>
        <th class="border border-slate-600">Qty</th>
        <th class="border border-slate-600">Total</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in data">
        <td class="border border-slate-600">
          {{ item.name }}
        </td>
        <td class="border border-slate-600">
          {{ formatRupiah(item.price) }}
        </td>
        <td class="border border-slate-600">
          {{ item.stock }}
        </td>
        <td class="border border-slate-600"></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type { Purchase } from "~/types/product/purchase"

const { formatNumber, formatRupiah } = useFormat()
defineProps<{
  data: Purchase["trolly"]
}>()
</script>
