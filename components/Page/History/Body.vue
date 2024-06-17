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
        <ElError v-if="!item.Product" text="error" />
        <td v-else class="border border-slate-600">
          {{ item.Product.name }}
        </td>
        <ElError v-if="!item.Product" text="error" />
        <td v-else class="border border-slate-600">
          {{ getRupiah(item.price) }}
        </td>
        <ElError v-if="!item.Product" text="error" />
        <td v-else class="border border-slate-600">
          {{ item.Product.stock }}
        </td>
        <td class="border border-slate-600"></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type { TransProps } from "~/types/market/order"

defineProps<{
  data: TransProps["Box"]
}>()
</script>
