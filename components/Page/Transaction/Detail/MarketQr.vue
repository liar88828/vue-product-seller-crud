<template>
  <h3 class="nota-title">
    <IconsCardBoardClose />

    <span>{{ data.name }}</span>
    <slot />
  </h3>
  <div class="flex justify-between">
    <div class="w-2/3">
      <div class="gap-2 flex flex-col">
        <div class="flex flex-col">
          <div class="font-medium">Name</div>
          <div>{{ data.address }}</div>
        </div>
        <ElError v-if="!data.address" text="error" />
        <div class="flex flex-col">
          <div class="font-medium">Email</div>
          test dev
          <!-- <div>{{ data.Contact?.email ?? "" }}</div> -->
        </div>
        <div class="flex flex-col">
          <div class="font-medium">Phone</div>
          test dev
          <!-- <div>{{ getPhone(data.Contact?.phone) }}</div> -->
        </div>
      </div>
    </div>

    <div class="w-1/3 flex justify-end mr-2">
      <ElQRBarcode :qrValue="fullUrl" class="bg-white rounded-3xl" />

      <!-- <button @click="downloadQRCode()">Download</button> -->
      <!-- <input type="text" v-model="text" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: MarketClient
  fullUrl: any
}>()

// // Function to download the QR Code
// function downloadQRCode() {
//   $downloadQRCode()
// }
</script>
