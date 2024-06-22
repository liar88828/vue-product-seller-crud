<template>
  <div class="space-y-2">
    <h1 class="text-3xl font-bold">{{ data.name }}</h1>
    <p class="text-gray-500 dark:text-gray-400">
      {{ data.industry }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Market } from "@prisma/client"

defineProps<{
  data: Market
}>()
</script>
