<template>
  <div class="join w-full">
    <input
      class="input-sm sm:input input-bordered join-item w-full"
      placeholder="Message ..."
      v-model="message"
    />
    <button class="btn join-item btn-info btn-sm sm:btn-md" @click="onSend">
      <iconsSend class="icons" />
    </button>
    <button
      class="btn join-item btn-primary btn-sm sm:btn-md"
      v-if="!isFullscreen"
      @click="toggleFullscreen"
    >
      <IconsFull class="icons" />
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
