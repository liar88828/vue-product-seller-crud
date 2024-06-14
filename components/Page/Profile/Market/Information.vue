<template>
  <div class="space-y-5">
    <div class="flex items-start gap-4">
      <IconsLocation />
      <div>
        <h3 class="font-medium">Address</h3>
        <p>
          {{ data.address }}
        </p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsIndustry />
      <div>
        <h3 class="font-medium">Industry</h3>
        <p>{{ data.industry }}</p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsPhone />
      <div>
        <h3 class="font-medium">Phone</h3>
        <p>+62 24 8643 2198</p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsMail />
      <div>
        <h3 class="font-medium">Email</h3>
        <p>info@orakgenah.com</p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsGlobe />
      <div>
        <h3 class="font-medium">Website</h3>
        <div v-if="data.Contact">
          <a class="text-blue-600 underline" href="#">
            {{ data.Contact.website }}
          </a>
        </div>
        <p>Not Available</p>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsShare />
      <div class="grid gap-2">
        <h3 class="font-medium">Social Media</h3>
        <div class="flex flex-col gap-3" v-if="data.SocialMedia">
          >
          <a
            class="flex flex-nowrap items-center gap-2"
            :href="data.SocialMedia.facebook"
          >
            <IconsFacebook class="h-8 w-8" />
            <span class="text-xs sm:text-lg">
              {{ getUrl(data.SocialMedia.facebook) }}</span
            >
          </a>
          <a
            class="flex flex-nowrap items-center gap-2"
            :href="data.SocialMedia.instagram"
          >
            <IconsInstagram class="h-8 w-8" />
            <span class="text-xs sm:text-lg">
              <!-- Instagram  -->
              {{ getUrl(data.SocialMedia.instagram) }}
            </span>
          </a>
          <a
            class="flex flex-nowrap items-center gap-2"
            :href="data.SocialMedia.twitter"
          >
            <IconsTwitter class="h-8 w-8" />
            <span class="text-xs sm:text-lg">
              <!-- Twitter -->
              {{ getUrl(data.SocialMedia.twitter) }}
            </span>
          </a>
          <a
            class="flex flex-nowrap items-center gap-2"
            :href="data.SocialMedia.whatsapp"
            ><IconsWhatsapp class="h-8 w-8" />
            <span class="text-xs sm:text-lg">
              <!-- Whatsapp -->
              {{ getUrl(data.SocialMedia.whatsapp) }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CompanyServerFull } from "~/types/market/ProfileCompany"

defineProps<{
  data: CompanyServerFull
}>()
</script>
