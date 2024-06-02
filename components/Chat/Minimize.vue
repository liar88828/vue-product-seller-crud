<template>
  <button
    v-if="isFullscreen"
    @click="toggleFullscreen"
    class="btn btn-info absolute top-5 right-5"
  >
    <IconsMini />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isFullscreen: boolean
  toggleFullscreen: () => void
}>()
</script>
