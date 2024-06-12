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
          {{ getRupiah(item.price) }}
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
import type { OrderProps } from "~/types/market/order"

defineProps<{
  data: OrderProps["trolly"]
}>()
</script>
