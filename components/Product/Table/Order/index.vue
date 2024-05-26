<template>
  <LayCardWrap>
    <ProductTableOrderOption />
    <ProductTableParent v-for="data in dataOrders" :key="data.id" :data="data">
      <ProductTableOrderBody :products="data.trolly" />
    </ProductTableParent>
  </LayCardWrap>
</template>

<script lang="ts" setup>
import type { OrderProps } from "~/assets/example/dataOrder"

defineProps<{
  dataOrders: OrderProps[]
}>()
</script>
<!-- <div
class="card space-y-3 bg-base-100 static"
v-for="data in dataOrders"
:key="data.id"
>
<div class="card-body">
  <div class="flex justify-between">
    <h2 class="titles">
      Market :
      <span class="font-bold titles"> {{ data.Market.name }}</span>
    </h2>
    <div class="flex flex-nowrap gap-2">
      <span :class="getStatus(data.status)">
        {{ data.status }}
      </span>
      <NuxtLink
        :to="`/product/payment/${data.id}`"
        class="btn btn-info sm:btn-sm btn-xs btn-outline"
        >Payment</NuxtLink
      >
    </div>
  </div>
  <PageHistoryTable :products="data.trolly" />
</div>
</div> -->
