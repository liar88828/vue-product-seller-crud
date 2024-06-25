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

    <slot />
  </div>
</template>

<script setup lang="ts">
import Social from "./Social.vue"

defineProps<{
  data: MarketServiceSingle
}>()
</script>
