<template>
  <div class="gap-4">
    <div>
      <h3 class="nota-title">
        <IconsUser />
        <span> Customer Information </span>
      </h3>
      <div class="gap-2 flex flex-col">
        <div class="flex items-center justify-between">
          <div class="font-medium">Name</div>
          <div>{{ data.userBuy.name }}</div>
        </div>
        <div class="flex items-center justify-between">
          <div class="font-medium">Phone</div>
          <div>{{ getPhone(data.userBuy.phone ?? "") }}</div>
        </div>
        <div class="flex items-center justify-between">
          <div class="font-medium">Address</div>
          <div>{{ data.userBuy.address }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PayProps,  } from "~/types/market/order"

defineProps<{
  data: PayProps["order"]
}>()
</script>
