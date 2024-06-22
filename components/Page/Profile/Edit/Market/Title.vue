<template>
  <div class="flex justify-between items-center">
    <div class="space-y-2">
      <p>
        title
        <input class="text-3xl font-bold" v-model="data.name" />
      </p>
      <p>
        industry
        <input v-model="data.industry" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: MarketServerFull
}>()
</script>
