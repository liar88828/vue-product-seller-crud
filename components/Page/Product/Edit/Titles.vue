<template>
  <div class="flex justify-between">
    <h3 class="text-lg font-semibold">{{ title }}</h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  onDelete: (i: number) => void
}>()
</script>
