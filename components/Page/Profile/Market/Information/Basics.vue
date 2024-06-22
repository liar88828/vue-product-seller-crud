<template>
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
</template>
<script setup lang="ts">
import type { Market } from "@prisma/client"

defineProps<{ data: Market }>()
</script>
