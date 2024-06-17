<template>
  <Card>
    <CardHead title="History" />
    <!-- list history -->
    <CardHead
      v-for="data in dataPurchase"
      class="bg-error/20"
      :title="data.userBuy.name ?? ''"
    >
      <div class="">
        <h1 class="">transaction</h1>
        <p>
          {{ getDate(data.createdAt) }}
        </p>

        <div class="">
          <h1>Product</h1>
          <slot />
        </div>
      </div>
    </CardHead>
  </Card>
</template>

<script setup lang="ts">
import type { TransProps } from "~/types/market/order"

defineProps<{
  dataPurchase: TransProps[]
}>()
</script>
