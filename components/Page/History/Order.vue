<template>
  <section class="card card-compact">
    <div class="card-body">
      <PageHistoryOption />

      <div
        class="card space-y-3 bg-base-100"
        v-for="dataOrder in dataOrders"
        :key="dataOrder.id"
      >
        <div class="card-body">
          <div class="flex justify-between">
            <h2 class="text-2xl">
              Market :
              <span class="font-bold"> {{ dataOrder.Market.name }}</span>
            </h2>
            <NuxtLink
              :to="`/product/payment/${dataOrder.id}`"
              class="btn btn-info sm:btn-sm btn-xs btn-outline"
              >Payment</NuxtLink
            >
          </div>
          <PageHistoryTable :products="dataOrder.trolly" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { OrderProps } from "~/assets/example/dataOrder"

defineProps<{
  dataOrders: OrderProps[]
}>()
</script>
