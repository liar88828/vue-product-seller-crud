<template>
  <h3 class="nota-title">
    <IconsCardBoardClose />
    <spam>{{ company.name }}</spam>
  </h3>
  <div class="flex justify-between">
    <div class="w-2/3">
      <div class="gap-2 flex flex-col">
        <div class="flex flex-col">
          <div class="font-medium">Name</div>
          <div>{{ company.address }}</div>
        </div>
        <div class="flex flex-col">
          <div class="font-medium">Email</div>
          <div>{{ company.Contact.email }}</div>
        </div>
        <div class="flex flex-col">
          <div class="font-medium">Phone</div>
          <div>{{ getPhone(company.Contact.phone) }}</div>
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
import type { ProfileMarket } from "~/types/market/ProfileCompany"
// const { $downloadQRCode } = useNuxtApp()

defineProps<{
  company: ProfileMarket
}>()

// // Function to download the QR Code
// function downloadQRCode() {
//   $downloadQRCode()
// }
</script>
