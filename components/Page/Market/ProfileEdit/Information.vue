<template>
  <div class="space-y-5">
    <div class="flex items-start gap-4">
      <IconsLocation />
      <div class="">
        <h3 class="font-medium">Address</h3>
        <textarea v-model="data.Market.address"></textarea>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsIndustry />
      <div>
        <h3 class="font-medium">Industry</h3>
        <input type="text" v-model="data.Market.industry" />
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsPhone />
      <div>
        <h3 class="font-medium">Phone</h3>
        <input type="text" v-model="data.Contact.phone" />
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsMail />
      <div>
        <h3 class="font-medium">Email</h3>
        <input type="text" v-model="data.Contact.email" />
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsGlobe />
      <div>
        <h3 class="font-medium">Website</h3>
        <input type="text" v-model="data.Contact.website" />
      </div>
    </div>
    <div class="flex items-start gap-4">
      <IconsShare />
      <div class="grid gap-2">
        <h3 class="font-medium">Social Media</h3>
        <div class="flex flex-col gap-3">
          <div class="flex flex-nowrap items-center gap-2">
            <IconsFacebook class="h-8 w-8" />
            <input type="text" v-model="data.SocialMedia.facebook" />
          </div>
          <div class="flex flex-nowrap items-center gap-2">
            <IconsInstagram class="h-8 w-8" />
            <input type="text" v-model="data.SocialMedia.instagram" />
          </div>
          <div
            class="flex flex-nowrap items-center gap-2"
            :href="data.SocialMedia.twitter"
          >
            <IconsTwitter class="h-8 w-8" />
            <input type="text" v-model="data.SocialMedia.twitter" />
          </div>
          <div
            class="flex flex-nowrap items-center gap-2"
            :href="data.SocialMedia.whatsapp"
          >
            <IconsWhatsapp class="h-8 w-8" />
            <input type="text" v-model="data.SocialMedia.whatsapp" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Social from "./Social.vue"

defineProps<{
  data: MarketServiceSingleClient
}>()
</script>
