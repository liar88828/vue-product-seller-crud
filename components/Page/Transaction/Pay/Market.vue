<template>
  <h3 class="nota-title">
    <IconsCardBoardClose />
    <spam>{{ data.name }}</spam>
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
          <div>{{ data.Contact?.email ?? "" }}</div>
        </div>
        <div class="flex flex-col">
          <div class="font-medium">Phone</div>
          <div>{{ getPhone(data.Contact?.phone) }}</div>
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
defineProps<{
  data: MarketClientFull
}>()

// // Function to download the QR Code
// function downloadQRCode() {
//   $downloadQRCode()
// }
</script>
