<template>
  <div class="space-y-5">
    <div class="flex items-start gap-4">
      <IconsLocation />
      <div class="">
        <h3 class="font-medium">Address</h3>
        <textarea v-model="data.address"></textarea>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsIndustry />
      <div>
        <h3 class="font-medium">Industry</h3>
        <input type="text" v-model="data.industry" />
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsPhone />
      <div>
        <h3 class="font-medium">Phone</h3>
        <input type="text" v-model="data.contact.phone" />
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsMail />
      <div>
        <h3 class="font-medium">Email</h3>
        <input type="text" v-model="data.contact.email" />
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsGlobe />
      <div>
        <h3 class="font-medium">Website</h3>
        <input type="text" v-model="data.contact.website" />
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsShare />
      <div class="grid gap-2">
        <h3 class="font-medium">Social Media</h3>
        <div class="flex flex-col gap-3">
          <div class="flex flex-nowrap items-center gap-2">
            <IconsFacebook class="h-8 w-8" />
            <input type="text" v-model="data.socialMedia.facebook" />
          </div>
          <div class="flex flex-nowrap items-center gap-2">
            <IconsInstagram class="h-8 w-8" />
            <input type="text" v-model="data.socialMedia.instagram" />
          </div>
          <div
            class="flex flex-nowrap items-center gap-2"
            :href="data.socialMedia.twitter"
          >
            <IconsTwitter class="h-8 w-8" />
            <input type="text" v-model="data.socialMedia.twitter" />
          </div>
          <div
            class="flex flex-nowrap items-center gap-2"
            :href="data.socialMedia.whatsapp"
          >
            <IconsWhatsapp class="h-8 w-8" />
            <input type="text" v-model="data.socialMedia.whatsapp" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProfileCompany } from "~/types/profile/profile"

defineProps<{
  data: ProfileCompany
}>()
</script>
