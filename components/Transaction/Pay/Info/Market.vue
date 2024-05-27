<template>
  <div class="space-y-4">
    <div class="flex items-center gap-3">
      <IconsCardBoardClose />
      <div class="text-2xl font-medium">{{ company.name }}</div>
    </div>

    <h2 class="text-2xl font-bold">{{ company.address }}</h2>
    <div class="gap-4 mt-5">
      <p class="text-xl font-semibold">{{ company.contact.email }}</p>
      <p class="text-xl font-semibold">
        {{ getPhone(company.contact.phone) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  company: import("../../../../types/market/profile").ProfileCompany
}>()
</script>
