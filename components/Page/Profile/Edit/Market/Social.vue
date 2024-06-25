<template>
  <div class="flex items-start gap-4">
    <IconsShare />
    <div class="grid gap-2">
      <h3 class="font-medium">Social Media</h3>
      <div class="flex flex-col gap-3">
        <div class="flex flex-nowrap items-center gap-2">
          <IconsFacebook class="h-8 w-8" />
          <input type="text" v-model="data.facebook" />
        </div>
        <div class="flex flex-nowrap items-center gap-2">
          <IconsInstagram class="h-8 w-8" />
          <input type="text" v-model="data.instagram" />
        </div>
        <div class="flex flex-nowrap items-center gap-2" :href="data.twitter">
          <IconsTwitter class="h-8 w-8" />
          <input type="text" v-model="data.twitter" />
        </div>
        <div class="flex flex-nowrap items-center gap-2" :href="data.whatsapp">
          <IconsWhatsapp class="h-8 w-8" />
          <input type="text" v-model="data.whatsapp" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: MarketServiceSingle["SocialMedia"]
}>()
</script>
