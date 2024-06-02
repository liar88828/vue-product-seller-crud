<template>
  <button v-if="!isFullscreen" @click="toggleFullscreen">
    <IconsFull class="icons" />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isFullscreen: boolean
  toggleFullscreen: () => void
}>()
</script>
