<template>
  <div class="join w-full">
    <input
      class="input-sm input input-bordered join-item w-full"
      placeholder="Message ..."
      v-model="message"
    />

    <button
      class="btn join-item btn-sm sm:btn-md"
      v-if="!isFullscreen"
      @click="toggleFullscreen"
    >
      <IconsFull class="size-5" />
    </button>
    <!--  -->
    <button class="btn join-item btn-sm sm:btn-md btn-info" @click="onSend">
      <IconsSend class="size-5" />
    </button>
  </div>
</template>

<script setup lang="ts">
const message = defineModel("message", { required: true })
const isFullscreen = defineModel("isFullscreen", { required: true })
defineProps<{
  onSend: () => void
  toggleFullscreen: () => void
}>()
</script>
