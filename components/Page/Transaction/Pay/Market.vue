<template>
  <h3 class="nota-title">
    <IconsCardBoardClose />
    <spam>{{ market.name }}</spam>
  </h3>
  <div class="flex justify-between">
    <div class="w-2/3">
      <div class="gap-2 flex flex-col">
        <div class="flex flex-col">
          <div class="font-medium">Name</div>
          <div>{{ market.address }}</div>
        </div>
        <ElError v-if="!market.address" text="error" />
        <div class="flex flex-col">
          <div class="font-medium">Email</div>
          <div>{{ market.Contact?.email ?? "" }}</div>
        </div>
        <div class="flex flex-col">
          <div class="font-medium">Phone</div>
          <div>{{ getPhone(market.Contact?.phone) }}</div>
        </div>
      </div>
    </div>

    <div class="w-1/3 flex justify-end mr-2">
      <slot />
      <!-- <button @click="downloadQRCode()">Download</button> -->
      <!-- <input type="text" v-model="text" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PayProps } from "~/types/market/order"

defineProps<{
  market: PayProps["market"]
}>()

// // Function to download the QR Code
// function downloadQRCode() {
//   $downloadQRCode()
// }
</script>
