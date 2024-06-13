<template>
  <div class="space-y-5">
    <div>
      <h3 class="font-medium">About {{ data.name }}</h3>
      <p class="text-gray-500 dark:text-gray-400">
        {{ data.description }}
      </p>
    </div>
    <div>
      <h3 class="font-medium">Our Vision</h3>
      <p class="text-gray-500 dark:text-gray-400">{{ data.vision }}</p>
    </div>
    <div>
      <h3 class="font-medium">Our Mission</h3>
      <p class="text-gray-500 dark:text-gray-400">
        {{ data.mission }}
      </p>
    </div>
    <div>
      <h3 class="font-medium">Company History</h3>
      <p class="text-gray-500 dark:text-gray-400">
        {{ data.history }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProfileCompany } from "~/types/market/ProfileCompany"

defineProps<{
  data: ProfileCompany
}>()
</script>
