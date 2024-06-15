<template>
  <div class="space-y-5">
    <div class="w-full">
      <h3 class="font-medium">About {{ data.name }}</h3>
      <textarea v-model="data.description"> </textarea>
    </div>
    <div>
      <h3 class="font-medium">Our Vision</h3>
      <textarea v-model="data.vision"></textarea>
    </div>
    <div>
      <h3 class="font-medium">Our Mission</h3>
      <textarea v-model="data.mission"></textarea>
    </div>
    <div>
      <h3 class="font-medium">Company History</h3>
      <textarea v-model="data.history"></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProfileMarket } from "~/types/market/ProfileCompany"

defineProps<{
  data: ProfileMarket
}>()
</script>
