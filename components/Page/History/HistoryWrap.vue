<template>
  <Card>
    <CardHead title="History" />
    <!-- list history -->
    <CardHead
      v-for="data in dataPurchase"
      class="bg-error/20"
      :title="data.User.name ?? ''"
    >
      <div>
        <h1>transaction</h1>
        <p>{{ getDate(data.createdAt) }}</p>
        <div>
          <h1>Product</h1>
          <slot />
        </div>
      </div>
    </CardHead>
  </Card>
</template>

<script setup lang="ts">
import type { TransServer } from "~/types/market/order"

defineProps<{
  dataPurchase: TransServer[]
}>()
</script>
