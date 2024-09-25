<template>
  <div class="flex items-start gap-4">
    <IconsPhone />
    <div>
      <h3 class="font-medium">Phone</h3>
      <p>{{ data.phone }}</p>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <IconsMail />
    <div>
      <h3 class="font-medium">Email</h3>
      <p>{{ data.email }}</p>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <IconsGlobe />
    <div>
      <h3 class="font-medium">Website</h3>
      <a class="text-blue-600 underline" href="#">
        {{ data.website }}
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Contact } from "@prisma/client"

defineProps<{
  data: Contact
}>()
</script>
