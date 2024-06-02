<template>
  <div class="flex justify-between">
    <div className="text-2xl sm:text-3xl font-semibold ">Total</div>
    <div className="text-2xl sm:text-3xl font-semibold ">
      {{
        getRupiah(
          data.trolly.map((t) => t.price * t.stock).reduce((a, b) => a + b, 0)
        )
      }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { OrderProps } from "~/types/product/order"

defineProps<{
  data: OrderProps
}>()
</script>
