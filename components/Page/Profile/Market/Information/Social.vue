<script lang="ts" setup>

import type { SocialMedia } from "@prisma/client";

defineProps<{ data: SocialMedia }>()
</script>

<template>
  <div class="flex items-start gap-4">
    <IconsShare/>
    <div class="grid gap-2">
      <h3 class="font-medium">Social Media</h3>
      <div class="flex flex-col gap-3">
        <a
            class="flex flex-nowrap items-center gap-2"
            :href="data.facebook"
        >
          <IconsFacebook class="h-8 w-8"/>
          <span class="text-xs sm:text-lg">
              {{ getUrl(data.facebook) }}</span
          >
        </a>
        <a
            class="flex flex-nowrap items-center gap-2"
            :href="data.instagram"
        >
          <IconsInstagram class="h-8 w-8"/>
          <span class="text-xs sm:text-lg">
              <!-- Instagram  -->
              {{ getUrl(data.instagram) }}
            </span>
        </a>
        <a
            class="flex flex-nowrap items-center gap-2"
            :href="data.twitter"
        >
          <IconsTwitter class="h-8 w-8"/>
          <span class="text-xs sm:text-lg">
              <!-- Twitter -->
              {{ getUrl(data.twitter) }}
            </span>
        </a>
        <a
            class="flex flex-nowrap items-center gap-2"
            :href="data.whatsapp"
        >
          <IconsWhatsapp class="h-8 w-8"/>
          <span class="text-xs sm:text-lg">
              <!-- Whatsapp -->
              {{ getUrl(data.whatsapp) }}
            </span>
        </a>
      </div>
    </div>
  </div>
</template>

